alert('Click on \'Logo\' to Pause music ');
// link to other page
function visitPageMoon(){
    window.location.href='Section Moon/Moon.html';
}
function visitPageMars(){
    window.location.href='Section Mars/Mars.html';
}
function visitPageEarth(){
    window.location.href='Section Earth/Earth.html';
}


// scroll effect

$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".earth").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });

  $(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".imgarea").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { 
            //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });



