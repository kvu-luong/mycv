$(document).ready(function() {
  $("html").niceScroll({
    cursorwidth: '4px',
    cursorcolor: '#1ad7c6',
    autohidemode: false,
    zindex: 999,
    horizrailenabled:false,
  });

  $( '.js-input' ).keyup(function() {
	  if ( $(this).val() ) {
	     $(this).addClass('not-empty');
	  } else {
	    $(this).removeClass('not-empty');
	  }
	});

});
