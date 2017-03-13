class ProductListController {
  constructor(ProductListService) {
    this.productListService = ProductListService;
  }
  $onInit() {
    
    this.product = [];
    this.cart = [];
    this.count = 0;
    this.cartOpen = false;
    this.totalItems = 0; 
    this.totalPrice = 0;

    this.product = this.productListService.getProductData();

  }

  openCart() {
    if(!this.cartOpen){
      this.cartOpen = true
    }else {
      this.cartOpen = false;
    }
  }

  addToLocalStorage(name, value) {
    localStorage[name] = value;
  }

  updateCart(obj, action) {
    if(action === 'add') {
      this.cart.push(obj);
    } else {
      const removeItem = this.cart.filter((item) => item.id === obj.id)[0];
      const index = this.cart.indexOf(removeItem);
      this.cart.splice(index,1);
    }
  }

  addToCart(id) {
    const productItem = this.product.items.filter((item) => item.id === id)[0];
    const index = this.product.items.indexOf(productItem);

    this.product.items[index].cart_count ++;
    if(this.product.items[index].cart_count === 1) {
      this.updateCart(this.product.items[index], 'add');
    }
    this.totalCount();
    this.addToLocalStorage('cart', JSON.stringify(this.cart));
  }

  removeFromCart(id, action){
    const productItem = this.product.items.filter((item) => item.id === id)[0];
    const index = this.product.items.indexOf(productItem);

    let cartCount = this.product.items[index].cart_count;
    if (cartCount > 0) {
      cartCount --;
    }
    
    if(cartCount === 0 || action === 'all' ) {
      this.updateCart(this.product.items[index], 'remove');
      cartCount = 0;
    }
    this.product.items[index].cart_count = cartCount;
    this.totalCount();
    this.addToLocalStorage('cart', JSON.stringify(this.cart));
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

ProductListController.$inject = ['ProductListService'];

export default ProductListController;