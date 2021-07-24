$( document ).ready(function() {
    console.log( "ready!" );
    
    // hamburger
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
        });
        // Clicking away from dropdown will remove the dropdown class
        $('html').click(function() {
        $('.nav-dropdown').hide();
        });
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
        });
        // Hamburger to X toggle
        $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
    });    

    function ReplaceSelectWithButtons(selectField) {
        // get the basics
        var selectValue = selectField.val();
        var selectId = selectField.attr('id')
        
        // get all options and create buttons
        $(selectField).find('option').each(function() {
        if ($(this).val()) {
            var btn = $('<div data-value="' + $(this).val() + '" data-target="' + selectId  + '" class="selectbtn">' + $(this).text() + '</div>');
            if ($(this).val() == selectValue) {
            btn.addClass('selected');
            }
            btn.insertBefore(selectField);
        }
        });    
        // hide the select field
        selectField.hide();
    
        // map click event to buttons
        $(document).on('click', '.selectbtn', function() {
        var target = $(this).data('target');
        $('.selectbtn[data-target="' + target + '"]').removeClass('selected');
        $(this).addClass('selected');
        
        // deselect everything, select the selected :)
        var selectorAll = '#' + target + ' option';
        $(selectorAll).removeAttr('selected');
        var selectorSingle = '#' + target + ' option[value="' + $(this).data('value') + '"]';
        $(selectorSingle).attr('selected', 'selected');
        $(selectorSingle).change();
        });
    }
    
    // change size select  to button
    ReplaceSelectWithButtons($('#size'));    
});


