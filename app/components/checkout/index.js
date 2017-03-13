import angular from 'angular';
import uiRouter from 'angular-ui-router';
import CheckoutComponent from './checkout.component';
import TopHeader from '../top-header';

const checkout = angular
  .module('checkout', [
    uiRouter,
    TopHeader,
  ])
  .component('checkout', CheckoutComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('checkout', {
        url: '/checkout',
        component: 'checkout'
      })
    $urlRouterProvider.otherwise('/');
  })
  .name;

export default checkout;