$( document ).ready(function() {
    console.log( "ready!" );

    // buttons
    var sm = $('.buy-button--small');
    var md = $('.buy-button--medium');
    var lg = $('.buy-button--large');  
    var btn = $('.buy-button');

    // default to medium size
    btn.hide();
    md.show();

    // default pricing (medium + paper frame)
    var priceText = $('.price');
    var price = parseInt($('.buy-button:visible').data('item-price'));

    // price calculator 
    function priceCalc() {
        sizeHandler();
        frameHandler();
        priceText.text("$"+ parseInt($('.qty').val()) * price);
    }

    // global handler
    $('select').on('change', function() {
        priceCalc();
    });

    $(".qty").change(function() {
        var qty = parseInt($('.qty').val());
        console.log(qty);
        $('.buy-button:visible').attr('data-item-quantity', qty);
        priceText.text("$"+qty * price);
        console.log('price from qty: ' + price);
      });    

    // size handler
    function sizeHandler() {
        var size = $('.size-selector')[0].selectedOptions[0].value;
        btn.hide();
        switch (size) {
            case "sm":
                sm.show();
                price = parseInt($('.buy-button:visible').data('item-price'))
                break;
            case "md":
                md.show();
                price = parseInt($('.buy-button:visible').data('item-price'))
                break;
            case "lg":
                lg.show();     
                price = parseInt($('.buy-button:visible').data('item-price')) 
                break;
            default:
                price = parseInt($('.buy-button:visible').data('item-price'))
            }        
        btn.attr('data-item-quantity', 1);              
        $('.qty').val(1);      
    }

    // frame handler
    function frameHandler () {
        var frame = $('.frame-selector')[0].selectedOptions[0].value;
        $('.buy-button:visible').attr('data-item-custom1-value', frame);
        switch (frame) {
            case "Paper 1":
            case "Paper 2":
                price = parseInt($('.buy-button:visible').data('item-price')) + 10;
                break;
            case "Thin 1":
            case "Thin 2":
                price = parseInt($('.buy-button:visible').data('item-price')) + 20;
                break;
            case "Thick 1":
            case "Thick 2":
                price = parseInt($('.buy-button:visible').data('item-price')) + 30;
                break;
            default:
                price = parseInt($('.buy-button:visible').data('item-price')) + 10;    
        } 
    }

    // run price calc on load
    priceCalc();
});
