import template from './cart.template.html';

const CartComponent = {
  bindings: {
      cart: '<',
      cartOpen: '<',
      totalItems: '<',
      totalPrice: '<',
      openCart: '&',
      addToCart: '&',
      removeFromCart: '&'
  },
  templateUrl: template
};

export default CartComponent;