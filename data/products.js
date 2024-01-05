let selectedProducts;

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




// scroll part ***********************************
function sectionScroll() {
  widows.body.scrollTo({
    
  })
}
