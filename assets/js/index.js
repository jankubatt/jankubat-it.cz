let clicked = sessionStorage.getItem("clicked");

$(document).ready(function () {
	$("a").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1200, function () {
				window.location.hash = hash;
			});
		}
	});
});

$(".dropdown").on("click", function() {
	sessionStorage.setItem("clicked", "true");
});

$.getJSON("https://geo.ipify.org/api/v1?apiKey=at_5hNQ4Gjv5vH77KEL0pwd2eT3y3aNI", function(data) {
	if (data.location.country != "CZ" && clicked == null) {
		window.location.replace("./en");
	}
});