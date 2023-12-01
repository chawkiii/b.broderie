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


// products list
const products1 = [{
  image: '/images/products/pic-1.png',
  name: 'produit 01',
  price: 1009090
},{
  image: '/images/products/pic-1.png',
  name: 'produit 02',
  price: 2009525
},{
  image: '/images/products/pic-1.png',
  name: 'produit 03',
  price: 7990000
},{
  image: '/images/products/pic-1.png',
  name: 'produit 04',
  price: 20919500
}];

const products2 = [{
  image: '/images/products/pic-2.png',
  name: 'produit 01',
  price: 1009090
},{
  image: '/images/products/pic-2.png',
  name: 'produit 02',
  price: 2009525
},{
  image: '/images/products/pic-2.png',
  name: 'produit 03',
  price: 7990000
},{
  image: '/images/products/pic-2.png',
  name: 'produit 04',
  price: 20919500
}];

const products3 = [{
  image: '/images/products/pic-3.png',
  name: 'produit 01',
  price: 1009090
},{
  image: '/images/products/pic-3.png',
  name: 'produit 02',
  price: 2009525
},{
  image: '/images/products/pic-3.png',
  name: 'produit 03',
  price: 7990000
},{
  image: '/images/products/pic-3.png',
  name: 'produit 04',
  price: 20919500
}];

const products4 = [{
  image: '/images/products/pic-4.png',
  name: 'produit 01',
  price: 1009090
},{
  image: '/images/products/pic-4.png',
  name: 'produit 02',
  price: 2009525
},{
  image: '/images/products/pic-4.png',
  name: 'produit 03',
  price: 7990000
},{
  image: '/images/products/pic-4.png',
  name: 'produit 04',
  price: 20919500
}];

const products5 = [{
  image: '/images/products/pic-1.png',
  name: 'produit 01',
  price: 1009090
},{
  image: '/images/products/pic-2.png',
  name: 'produit 02',
  price: 2009525
},{
  image: '/images/products/pic-3.png',
  name: 'produit 03',
  price: 7990000
},{
  image: '/images/products/pic-4.png',
  name: 'produit 04',
  price: 20919500
}];


// generate the products in the html page
function generateProductHTML(products) {
  let productsHTML = '';
  products.forEach((product) => {
    productsHTML += `
    <div class="product-container">
    <div class="product-image-container">
      <img class="product-image" src="${product.image}">
    </div>
    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>
    <div class="product-price">
      ${formatPrice(product.price)} DZD
    </div>
    <div class="product-quantity-container">
      <select>
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
    <button class="add-to-cart-button button-primary js-add-to-cart"
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
  const html = generateProductHTML(selectedProducts);
  productsGrid.innerHTML = html;
}
generateAndDisplayProducts(0);
radioInputs.forEach((input, index) => {
  input.addEventListener('change', () => {
    generateAndDisplayProducts(index);
  });
});




// add to cart button function
document.querySelectorAll('.js-add-to-cart').forEach(
  (button) => {
    button.addEventListener('click', () => {
      const productName = button.dataset.productName;
      let matchingItem;

      cart.forEach((item) => {
        if (productName === item.productName) {
        matchingItem = item;    
        }
      });

      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          productName,
          quantity: 1
        });
      }

      let cartQuantity = 0;
      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });

      document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    });
  });
  