$( document ).ready(function() {
    console.log( "ready!" );

    // globals
    let buyButton = $('.buy-button');
    let price = parseInt(buyButton.data('item-price'));
    let priceText = $('.price');

    // Price handler
    $('.price-picker').on('change', function() {
        price = this.value;
        buyButton.attr('data-item-price', price);
        buyButton.attr('data-item-quantity', 1);        
        priceText.text("$"+ price);
        $('.qty').val(1);
      });

    // Quantity handler
    $('.qty').on('change', function() {
        var qty = this.value;
        buyButton.attr('data-item-quantity', qty);
        priceText.text("$"+qty * price);
    });
});
