import template from './top-header.template.html';

const TopHeaderComponent = {
    bindings: {
        totalItems: '<',
        totalPrice: '<',
        openCart: '&'
    },
    templateUrl: template
};

export default TopHeaderComponent;