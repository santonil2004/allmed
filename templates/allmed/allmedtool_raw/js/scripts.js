//==============================================================
// CUSTOM SCRIPTS
// ==============================================================


$(document).ready(function() {
	
 $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
	  
	  $('.slider-1').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
	  
	  
	  // tab
// ==============================================================
$(function () {
$('#myTab a:first').tab('show')
})

$(function () {
$('#review-col a:first').tab('show')
})


$(function () {
$('#login-col a:first').tab('show')
})

});


// end ready function here.

