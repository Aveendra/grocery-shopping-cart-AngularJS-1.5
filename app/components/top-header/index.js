import TopHeaderComponent from './top-header.component';

const topHeader = angular
  .module('topHeader', [])
  .component('topHeader', TopHeaderComponent)
  .name;

export default topHeader;