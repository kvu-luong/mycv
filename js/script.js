$(document).ready(function() {
  $('.js-input' ).keyup(function() {
	  if ( $(this).val() ) {
	     $(this).addClass('not-empty');
	  } else {
	    $(this).removeClass('not-empty');
	  }
	});

  //loading
	let loader = document.querySelector('.bg-loader');
	let body = document.querySelector('body');
	let flagReload = true;
	startLoading(loader, body);
	window.addEventListener('load', (event) => {
		stopLoading(loader, body);
		console.log('load done');
		flagReload = false;
	});
	if(flagReload) {
		setTimeout(() => {
			stopLoading(loader, body);
			console.log('ssss')
		}, 1000);
	}

});

function startLoading(loader, body){
	loader.classList.add('show');
	body.classList.add('stopScroll');
}

function stopLoading(loader, body){
	loader.classList.remove('show');
	body.classList.remove('stopScroll');
}


