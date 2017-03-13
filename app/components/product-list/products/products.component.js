import template from './products.template.html';

const ProductsComponent = {
  bindings: {
    items: '<',
    addToCart: '&',
    removeFromCart: '&'
  },
  templateUrl: template
};

export default ProductsComponent;