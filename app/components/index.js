import angular from 'angular';
import ProductList from './product-list';
import Checkout from './checkout';
import BottomFooter from './bottom-footer';

const components = angular
  .module('app.components', [
    ProductList,
    Checkout,
    BottomFooter
  ])
  .name;

export default components;