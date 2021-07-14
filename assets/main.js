$( document ).ready(function() {
    console.log( "ready!" );

    // globals
    var priceText = $('.price');
    var sm = $('.buy-button--small');
    var md = $('.buy-button--medium');
    var lg = $('.buy-button--large');  
    var btn = $('.buy-button');
    var price = parseInt($('.buy-button:visible').data('item-price'));
    
    // default to medium
    btn.hide();
    md.show();

    // frame handler
    $('.frame-selector').on('change', function() {
        frame = this.value;
        console.log(frame);
        $('.buy-button:visible').attr('data-item-custom1-value', frame);
      });    

    // size handler
    $('.size-selector').on('change', function() {
        size = this.value;
        btn.hide();
        switch (size) {
          case "sm":
            price = parseInt(sm.data('item-price'));
            sm.show();
            break;
          case "md":
            price = parseInt(md.data('item-price'));
            md.show();
            break;
          case "lg":
            price = parseInt(lg.data('item-price'));
            lg.show();      
            break;
          default:
            price = parseInt(md.data('item-price'));
        }        
        btn.attr('data-item-quantity', 1);              
        priceText.text("$"+ price);
        $('.qty').val(1);
      });

    // quantity handler
    $('.qty').on('change', function() {
        var qty = this.value;
        $('.buy-button:visible').attr('data-item-quantity', qty);
        priceText.text("$"+qty * price);
    });
});
