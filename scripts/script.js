import { cart } from "../data/cart.js";
import {
  products1,
  products2,
  products3,
  products4,
  products5,
} from "../data/products.js";

// Format price function
function formatPrice(price) {
  return (price / 100)
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(",", " ")
    .replace("$", "");
}

// Generate the products in the HTML page
function generateProductHTML(products) {
  return products
    .map(
      (product) => `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image" src="${product.image}">
      </div>
      <div class="product-name">${product.name}</div>
      <div class="product-price">${formatPrice(product.price)} DZD</div>
      <div class="product-quantity-container">
        <select class="js-quantity-selector" data-product-name="${
          product.name
        }">
          ${Array.from(
            { length: 10 },
            (_, i) => `<option value="${i + 1}">${i + 1}</option>`
          ).join("")}
        </select>
      </div>
      <div class="added-to-cart">
        <img src="images/icons/checkmark.png"> Added
      </div>
      <button class="add-to-cart-button js-add-to-cart" data-product-name="${
        product.name
      }">Add to Cart</button>
    </div>
  `
    )
    .join("");
}

// Get products based on index
function getProductsByIndex(index) {
  const productsList = [products1, products2, products3, products4, products5];
  return productsList[index] || [];
}

// Add to cart function
function addToCart(productName, quantity) {
  const matchingItem = cart.find((item) => item.productName === productName);
  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({ productName, quantity });
  }
  document.querySelector(".js-cart-quantity").innerHTML = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
}

// Generate and display products
function generateAndDisplayProducts(index) {
  const selectedProducts = getProductsByIndex(index);
  productsGrid.innerHTML = generateProductHTML(selectedProducts);

  document.querySelectorAll(".js-add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const productName = button.dataset.productName;
      const quantity = Number(
        document.querySelector(
          `.js-quantity-selector[data-product-name="${productName}"]`
        ).value
      );
      addToCart(productName, quantity);
    });
  });
}

// Slider functionality
const radioInputs = document.querySelectorAll('input[name="slider"]');
const productsGrid = document.querySelector(".js-products-grid");
const indicators = document.querySelectorAll(".slider-indicator");

document.querySelectorAll(".cards label").forEach((label, index) => {
  label.addEventListener("click", () => {
    updateSlider(index);
  });
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    updateSlider(index);
  });
});

// Update slider and display products
function updateSlider(index) {
  indicators.forEach((indicator) => indicator.classList.remove("active"));
  indicators[index].classList.add("active");
  radioInputs[index].checked = true;
  generateAndDisplayProducts(index);
}

// Initial load
generateAndDisplayProducts(0);
radioInputs.forEach((input, index) => {
  input.addEventListener("change", () => generateAndDisplayProducts(index));
});
