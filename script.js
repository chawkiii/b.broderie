/***********************************************************

// Sample product data (replace this with your actual product data)
const products = {
  caftan: [
    { name: "Caftan Product 1", price: 29.99 },
    { name: "Caftan Product 2", price: 39.99 },
    // Add more caftan products
  ],
  robe: [
    { name: "Robe Product 1", price: 19.99 },
    { name: "Robe Product 2", price: 29.99 },
    // Add more robe products
  ],
  // Repeat for other categories
};

let cart = [];

// Function to add a product to the cart
function addToCart(category, productIndex) {
  const selectedProduct = products[category][productIndex];
  cart.push(selectedProduct);
  updateCartCount();
}

// Function to update the cart count in the UI
function updateCartCount() {
  const cartCountElement = document.querySelector(".cart-number");
  if (cartCountElement) {
    cartCountElement.textContent = cart.length;
  }
}

// Example: Add a click event listener to each product on the category page
document.addEventListener("DOMContentLoaded", () => {
  const caftanProducts = document.querySelectorAll(".cathegory-caftan");
  caftanProducts.forEach((product, index) => {
    product.addEventListener("click", () => addToCart("caftan", index));
  });

  // Add similar event listeners for other categories
});


***************************************************************/



document.addEventListener("DOMContentLoaded", () => {
  const cathegories = document.querySelectorAll('.cathegory');

  cathegories.forEach(cathegory => {
    cathegory.addEventListener('mouseenter', () => {
      cathegories.forEach(otherCathegory => {
        if (otherCathegory !== cathegory) {
          otherCathegory.classList.add('js-cathegory');
        }
      });
    });

    cathegory.addEventListener('mouseleave', () => {
      cathegories.forEach(otherCathegory => {
        if (otherCathegory !== cathegory) {
          otherCathegory.classList.remove('js-cathegory');
        }
      });
    });
  });
});