import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ProductListComponent from './product-list.component';
import ProductListService from './product-list.service';
import Products from './products';
import Cart from './cart';
import TopHeader from '../top-header';

const productlist = angular
  .module('productlist', [
    uiRouter,
    Products,
    TopHeader,
    Cart
  ])
  .component('productlist', ProductListComponent)
  .service('ProductListService', ProductListService)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('productlist', {
        url: '/',
        component: 'productlist'
      })
    $urlRouterProvider.otherwise('/');
  })
  .name;

export default productlist;