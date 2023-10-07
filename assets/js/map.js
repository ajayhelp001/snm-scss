

$(document).ready(function() {
    // Add a click event handler to elements with class "kamal"
    // $('.kamal').on('click', function() {
    //     const $svg = $(this).closest('svg');

    //     // Find the index of the clicked rect within its parent SVG
    //     const index = $svg.find('.kamal').index(this);

    //     // Get the sibling ellipses that match the clicked rect's index
    //     const $ellipses = $svg.find('ellipse').slice(index, index + 4);

    //     $ellipses.attr('fill', '#f00');
    // });

$('.node2').on('click', function() {
    const $parent = $(this); // Get the parent 'g' element
    const $ellipses = $parent.find('ellipse'); // Find 'ellipse' elements within the same parent
    
    // Loop through each 'ellipse' element
    $parent.each(function() {
        const $ellipse = $(this);
        if ($parent.hasClass('animation_color')) {            
            $parent.removeClass('animation_color');
        } else {
            console.log("sdkjfsdlf");
            $parent.addClass('animation_color');
            $('.popupdata').show();
            $('.dydata').html('NEW DATA IS');
            
        }
    });
});

});