

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
    $('div.overview_image_container svg g.circle_click_cont').on('click', function() {
        console.log("sdfjsdfl");
        if($('.overview_map_line').hasClass('popupopn') && $('.overview_map_arrow').hasClass('popupopn')){
            $('.overview_map_line').removeClass('popupopn');
            $('.overview_map_arrow').removeClass('popupopn')
        } else {
            $('.overview_map_line').addClass('popupopn');
            $('.overview_map_arrow').addClass('popupopn');
            $('.overview_map_popupdata').addClass('popupopn');
        }
    });
$('.node2').on('click', function() {
    console.log("hellosdflkjasoidfj");
    const $parent = $(this); // Get the parent 'g' element    

    var location = $parent.data('location');
    var district = $parent.data('district');
    var county = $parent.data('county');
    var city = $parent.data('city');
    var country = $parent.data('country');
    var day = $parent.data('day');
    var time = $parent.data('time');
    var devices = $parent.data('devices');
    var wifiid = $parent.data('wifiid');
    var mac = $parent.data('mac');
    var ipaddress = $parent.data('ipaddress');
    var port = $parent.data('port');
    var account = $parent.data('account');
    var followers = $parent.data('followers');
    var posts = $parent.data('posts');
    var likes = $parent.data('likes');
    var friends = $parent.data('friends');
    var mobile = $parent.data('mobile');
    var age = $parent.data('age');
    var html_geo_info = '<div class="row gap-3"><div class="col-12"><div class="postHeading">Post location</div><div class="row gap-1"><div class="col-12"><div class="row align-items-center gx-2"><div class="col-5 leftHeading">Location</div><div class="col-7 sourceValue">'+location+'</div></div></div><div class="col-12"><div class="row align-items-center gx-2"><div class="col-5 leftHeading">District</div><div class="col-7 sourceValue">'+district+'</div></div></div><div class="col-12"><div class="row align-items-center gx-2"><div class="col-5 leftHeading">County</div><div class="col-7 sourceValue">'+county+'</div></div></div><div class="col-12"><div class="row align-items-center gx-2"><div class="col-5 leftHeading">City</div><div class="col-7 sourceValue">'+city+'</div></div></div><div class="col-12"><div class="row align-items-center gx-2"><div class="col-5 leftHeading">Country</div><div class="col-7 sourceValue">'+country+'</div></div></div></div></div><div class="col-12"><div class="postHeading">Post timestamp</div><div class="row gap-1"><div class="col-12"><div class="row align-items-center gx-2"><div class="col-5 leftHeading">Day</div><div class="col-7 sourceValue">'+day+'</div></div></div><div class="col-12"><div class="row align-items-center gx-2"><div class="col-5 leftHeading">Time</div><div class="col-7 sourceValue">'+time+'</div></div></div></div></div><div class="col-12"><div class="postHeading">More details</div><div class="row gap-1"><div class="col-12"><div class="row align-items-center gx-2"><div class="col-5 leftHeading">Devices</div><div class="col-7 sourceValue">'+devices+'</div></div></div><div class="col-12"><div class="row align-items-center gx-2"><div class="col-5 leftHeading">Wifi ID</div><div class="col-7 sourceValue">'+wifiid+'</div></div></div><div class="col-12"><div class="row align-items-center gx-2"><div class="col-5 leftHeading">MAC</div><div class="col-7 sourceValue">'+mac+'</div></div></div><div class="col-12"><div class="row align-items-center gx-2"><div class="col-5 leftHeading">IP address</div><div class="col-7 sourceValue">'+ipaddress+'</div></div></div><div class="col-12"><div class="row align-items-center gx-2"><div class="col-5 leftHeading">Port</div><div class="col-7 sourceValue">'+port+'</div></div></div></div></div><div class="col-12"><div class="postHeading">Account info</div><div class="row gap-1"><div class="col-12"><div class="row align-items-center gx-2"><div class="col-5 leftHeading">Account</div><div class="col-7 sourceValue">'+account+'</div></div></div><div class="col-12"><div class="row align-items-center gx-2"><div class="col-5 leftHeading">Followers</div><div class="col-7 sourceValue">'+followers+'</div></div></div><div class="col-12"><div class="row align-items-center gx-2"><div class="col-5 leftHeading">Posts</div><div class="col-7 sourceValue">'+posts+'</div></div></div><div class="col-12"><div class="row align-items-center gx-2"><div class="col-5 leftHeading">Likes</div><div class="col-7 sourceValue">'+likes+'</div></div></div><div class="col-12"><div class="row align-items-center gx-2"><div class="col-5 leftHeading">Friends</div><div class="col-7 sourceValue">'+friends+'</div></div></div><div class="col-12"><div class="row align-items-center gx-2"><div class="col-5 leftHeading">Mobile</div><div class="col-7 sourceValue">'+mobile+'</div></div></div><div class="col-12"><div class="row align-items-center gx-2"><div class="col-5 leftHeading">Age</div><div class="col-7 sourceValue">'+age+'</div></div></div></div></div></div>';
    // Loop through each 'ellipse' element
    $parent.each(function() {
        const $ellipse = $(this);
        if ($parent.hasClass('animation_color')) {            
            $parent.removeClass('animation_color');
        } else {            
            $parent.addClass('animation_color');
            $('.popupdata').show();
            console.log("Hello");
            $('.geoInfoCard .card-body > div').html(html_geo_info);                    
        }
    });
});

});