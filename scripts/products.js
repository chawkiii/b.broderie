let selectedProducts;

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
  name: 'produit01',
  price: 1009090
},{
  image: '/images/products/pic-1.png',
  name: 'produit02',
  price: 2009525
},{
  image: '/images/products/pic-1.png',
  name: 'produit03',
  price: 7990000
},{
  image: '/images/products/pic-1.png',
  name: 'produit04',
  price: 20919500
}];

const products2 = [{
  image: '/images/products/pic-2.png',
  name: 'produit01',
  price: 1009090
},{
  image: '/images/products/pic-2.png',
  name: 'produit02',
  price: 2009525
},{
  image: '/images/products/pic-2.png',
  name: 'produit03',
  price: 7990000
},{
  image: '/images/products/pic-2.png',
  name: 'produit04',
  price: 20919500
}];

const products3 = [{
  image: '/images/products/pic-3.png',
  name: 'produit01',
  price: 1009090
},{
  image: '/images/products/pic-3.png',
  name: 'produit02',
  price: 2009525
},{
  image: '/images/products/pic-3.png',
  name: 'produit03',
  price: 7990000
},{
  image: '/images/products/pic-3.png',
  name: 'produit04',
  price: 20919500
}];

const products4 = [{
  image: '/images/products/pic-4.png',
  name: 'produit01',
  price: 1009090
},{
  image: '/images/products/pic-4.png',
  name: 'produit02',
  price: 2009525
},{
  image: '/images/products/pic-4.png',
  name: 'produit03',
  price: 7990000
},{
  image: '/images/products/pic-4.png',
  name: 'produit04',
  price: 20919500
}];

const products5 = [{
  image: '/images/products/pic-1.png',
  name: 'produit01',
  price: 1009090
},{
  image: '/images/products/pic-2.png',
  name: 'produit02',
  price: 2009525
},{
  image: '/images/products/pic-3.png',
  name: 'produit03',
  price: 7990000
},{
  image: '/images/products/pic-4.png',
  name: 'produit04',
  price: 20919500
}];


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


// Ajoutez un écouteur d'événement pour chaque label
document.querySelectorAll('.cards label').forEach((label, index) => {
  label.addEventListener('click', () => {
    // Supprimez la classe 'active' de tous les indicateurs
    indicators.forEach((indicator) => {
      indicator.classList.remove('active');
    });

    // Ajoutez la classe 'active' à l'indicateur actuel
    indicators[index].classList.add('active');
    // Sélectionnez le bouton radio correspondant
    radioInputs[index].checked = true;

    // Générez et affichez les produits pour la catégorie sélectionnée
    generateAndDisplayProducts(index);

    // Mettez à jour l'indicateur du slider
    updateSliderIndicator(index);
  });
});

// Ajoutez un écouteur d'événement pour chaque indicateur
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    // Supprimez la classe 'active' de tous les indicateurs
    indicators.forEach((otherIndicator) => {
      otherIndicator.classList.remove('active');
    });

    // Ajoutez la classe 'active' à l'indicateur actuel
    indicator.classList.add('active');

    // Sélectionnez le bouton radio correspondant
    radioInputs[index].checked = true;

    // Générez et affichez les produits pour la catégorie sélectionnée
    generateAndDisplayProducts(index);

    // Mettez à jour l'indicateur du slider
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
  // Retirez la classe active de tous les indicateurs
  indicators.forEach(indicator => indicator.classList.remove('active'));

  // Ajoutez la classe active à l'indicateur correspondant à la diapositive sélectionnée
  indicators[index].classList.add('active');
}





