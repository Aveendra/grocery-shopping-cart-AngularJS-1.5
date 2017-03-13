// Vendor
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// App
import AppComponent from './app.component';
import Components from './components';

const app = angular
    .module('app', [
        Components,
        uiRouter
    ])
    .component('app', AppComponent)
    .name;

export default app;