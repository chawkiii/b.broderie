import { cart } from "../data/cart.js";
import { products1, products2, products3, products4, products5 } from "../data/products.js";

// format price fucntion
function formatPrice(price) {
  let formattedPrice = (price / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  formattedPrice = formattedPrice.replace(',', ' ');
  formattedPrice = formattedPrice.replace('$', '');
  return formattedPrice;
}



// generate the products in the html page
function generateProductHTML(products, index) {
  let productsHTML = '';
  products.forEach((product) => {
    productsHTML += `
    <div class="product-container">
    <div class="product-image-container">
      <img class="product-image" src="${product.image}">
    </div>
    <div class="product-name">
      ${product.name}
    </div>
    <div class="product-price">
      ${formatPrice(product.price)} DZD
    </div>
    <div class="product-quantity-container">
      <select class="js-quantity-selector" data-product-name="${product.name}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>
    <button class="add-to-cart-button js-add-to-cart"
    data-product-name="${product.name}">
      Add to Cart
    </button>
  </div>
    `;
  });
  return productsHTML;
}


// slider function
const radioInputs = document.querySelectorAll('input[name="slider"]');
const productsGrid = document.querySelector('.js-products-grid');
const indicators = document.querySelectorAll('.slider-indicator');

function generateAndDisplayProducts(index) {
  let selectedProducts;
  if (index === 0) {
    selectedProducts = products1;
  } else if (index === 1) {
    selectedProducts = products2;
  } else if (index === 2) {
    selectedProducts = products3;
  } else if (index === 3) {
    selectedProducts = products4;
  } else if (index === 4) {
    selectedProducts = products5;
  }
  const html = generateProductHTML(selectedProducts, index);
  productsGrid.innerHTML = html;


  // add to cart button function
  document.querySelectorAll('.js-add-to-cart').forEach(
  (button) => {
    button.addEventListener('click', () => {
      
      const productName = button.dataset.productName;
      const quantitySelector = document.querySelector(`.js-quantity-selector[data-product-name="${productName}"]`);
      const quantity = Number(quantitySelector.value);
      let matchingItem;

      cart.forEach((item) => {
        if (productName === item.productName) {
        matchingItem = item;    
        }
      });

      if (matchingItem) {
        matchingItem.quantity += quantity;
      } else {
        cart.push({
          productName,
          quantity: quantity
        });
      }

      let cartQuantity = 0;
      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });

      document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    });
  });
}


// slider cards functions
document.querySelectorAll('.cards label').forEach((label, index) => {
  label.addEventListener('click', () => {
    indicators.forEach((indicator) => {
      indicator.classList.remove('active');
    });
    indicators[index].classList.add('active');
    radioInputs[index].checked = true;
    generateAndDisplayProducts(index);
    updateSliderIndicator(index);
  });
});

// slider buttons functions
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    indicators.forEach((otherIndicator) => {
      otherIndicator.classList.remove('active');
    });
    indicator.classList.add('active');
    radioInputs[index].checked = true;
    generateAndDisplayProducts(index);
    updateSliderIndicator(index);
  });
});

generateAndDisplayProducts(0);
radioInputs.forEach((input, index) => {
  input.addEventListener('change', () => {
    generateAndDisplayProducts(index);
  });
});

function updateSliderIndicator(index) {
  indicators.forEach(indicator => indicator.classList.remove('active'));
  indicators[index].classList.add('active');
}

