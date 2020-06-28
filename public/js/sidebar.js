  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
	$("body").toggleClass("off-Scroll");
	$("header").toggleClass("overlay active");
	$("main").toggleClass("body-overlay-active");
	

  });