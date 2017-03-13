import BottomFooterComponent from './bottom-footer.component';

const bottomFooter = angular
  .module('bottomFooter', [])
  .component('bottomFooter', BottomFooterComponent)
  .name;

export default bottomFooter;