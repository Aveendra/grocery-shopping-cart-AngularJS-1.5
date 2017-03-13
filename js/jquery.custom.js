// IIFE - Immediately Invoked Function Expression
(function($, window, document) {

    // The $ is now locally scoped 

    // Listen for the jQuery ready event on the document
    $(function() {

    	/* Common variables */
    	var $body = $('body');
    	var $cart = $('#cart');
		var $cartInner = $('.cart-inner');
		var $cartOverlay = $('#cart .overlay');
    	

    	/* Window Resize Functions */
    	$(window).resize(function() {

    		var windowHeight = $(window).height();
    		var headerHeight = $('#header').height();
    		var footerHeight = $('footer').height();

			/* Cart Product List height */
	    	var $cart = $('#cart'),
	    	$cartInner = $cart.find('.cart-inner'),
	    	$cartHeader = $cart.find('.cart-header'),
	    	$cartFooter = $cart.find('.cart-footer'),
	    	$cartContent = $cart.find('.cart-product-list');
	    	var cartInnerHeight = windowHeight,
	    	cartHeaderHeight = $cartHeader.outerHeight(),
	    	cartFooterHeight = $cartFooter.outerHeight(),
	    	cartContentHeight = cartInnerHeight - cartHeaderHeight - cartFooterHeight - 40;

	    	$cartContent.height(cartContentHeight);

	    	/* Page content minimum height */
	    	$pageContent = $('#page');
	    	$pageContent.css({
	    		minHeight: windowHeight - headerHeight - footerHeight
	    	});
	    	
		});

		$(window).trigger('resize');
		

    	/* Modal function */
    	$('[data-toggle="cart-modal"]').on('click', function(e) {
    		$('body').css({'overflow':'hidden'});
    		e.preventDefault();
		    var modalId = $(this).attr('data-modal');
		    var $modal = $(modalId);
		    $modal.fadeIn('fast');
		});

		function close_modal(callback){
			$('body').css({'overflow':'auto'});
			var $modal = $(this).parent().parent();
			$('.modal').fadeOut('fast', function(){
				setTimeout(function(){
				    if (typeof callback === "function") {
				        callback();
				    }				
				}, 500);
			});
		}

		$('[data-action="modal-close"], .modal .overlay').on('click',function(e){
			e.preventDefault();
			close_modal();
		});

		/* Shopping Cart */
		$('#cart-checkout').on('click', function(event) {
			event.preventDefault();
			var $this = $(this);

			$body.addClass('cart-open');
			$cart.css('visibility','visible');
			$cart.fadeIn('fast');
			$cartInner.removeClass('sidebarAnimationExit').addClass('sidebarAnimation');
			$cartOverlay.removeClass('sidebarAnimationExit').addClass('cartOverlayEnter');
		});

		$('#cart').on('click', '.overlay, .cart-header .icon-close', function(event) {
			event.preventDefault();
			$cartInner.removeClass('sidebarAnimation').addClass('sidebarAnimationExit');
			//$cartOverlay.removeClass('cartOverlayEnter').addClass('sidebarAnimationExit');
			$cart.fadeOut();
			$body.removeClass('cart-open');
		});


		/* Request Items */
		$('#request-items #req-itms-submit').on('click',function(e){
			e.preventDefault();
			$('#request-items .req-wrap').hide();
			$('#request-items .itm-request-success').show();
		});

		$('#request-items .takeback, #request-items .overlay').on('click',function(e){
			e.preventDefault();
			close_modal(function(){
				$('#request-items .itm-request-success').hide();
				$('#request-items .req-wrap').show();
			});
		});
		
		
    });

    // The rest of the code goes here!

}(window.jQuery, window, document));
// The global jQuery object is passed as a parameter