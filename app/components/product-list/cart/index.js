import angular from 'angular';
import Cart from './cart.component';

const cart = angular
  .module('productlist.cart', [])
  .component('cart', Cart)
  .name;

export default cart;