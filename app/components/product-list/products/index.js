import angular from 'angular';
import Products from './products.component';

const products = angular
  .module('productlist.products', [])
  .component('products', Products)
  .name;

export default products;