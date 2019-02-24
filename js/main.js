(function () {
	var navbar = document.getElementById("navbar");
    
	function changeNavbar(force = false) {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		navbar.classList.toggle("nav-light", scrollTop >= 1 || force);
	}
    
    document.getElementById("a-dropdown").addEventListener("click", function (event) {
		changeNavbar(true);
	});
    
    document.getElementById("button-collapse").addEventListener("click", function (event) {
		changeNavbar(true);
	});
    
	var didScroll = false;
    
	$(window).scroll(function () {
		didScroll = true;
	});
    
	setInterval(function() {
		if (didScroll) {
			didScroll = false;
			changeNavbar();
		}
	}, 100);
    
	changeNavbar();
	
	$('a[href="#carousel-app"]').click( function(event) {
      		e.preventDefault();
   	} );
	
	$("a[href*=\\#]").on("click", function (event) {
		if(this.pathname === window.location.pathname) {
			event.preventDefault();
			if (this.hash !== "#carousel-app") {
	        		$("html, body").animate({
			    		scrollTop: $(this.hash).offset().top
				}, 500);
			}
		}
	});
})();
