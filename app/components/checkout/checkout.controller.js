class CheckoutController {
    constructor() {
        this.CheckoutController = CheckoutController;
    }

    $onInit() {
        this.cart = JSON.parse(localStorage.cart);
        
        this.totalItems = 0;
        this.totalPrice = 0;

        this.totalCount();
    }

    addToCart(index) {
        this.cart[index].cart_count ++;
        this.totalCount();
    }

    removeFromCart(index, action){
        let cartCount = this.cart[index].cart_count;
        if (cartCount > 0) {
        cartCount --;
        }
        if(cartCount === 0 || action === 'all' ) {
            this.cart.splice(index,1);
        }
        this.cart[index].cart_count = cartCount;
        this.totalCount();
    }


    totalCount() {
        this.totalItems = 0;
        this.totalPrice = 0;
        this.cart.map((item) => {
            this.totalItems += item.cart_count;
            this.totalPrice += item.price*item.cart_count;
        });
    }

}

CheckoutController.$inject = [];

export default CheckoutController;