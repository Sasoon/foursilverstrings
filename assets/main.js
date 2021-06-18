window.addEventListener('DOMContentLoaded', function(event) {
    document.addEventListener('change', function(evt){
        if(evt.target.classList.contains('qty')){
            var button = $('.buy-button');
            var price = $('.price');
            var base_price = button.data('item-price');
            var qty = parseInt(evt.target.value);
            console.log(qty);
            button.attr('data-item-quantity', qty);
            price.text("$"+qty * base_price);
        }
    })
});