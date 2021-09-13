$(document).ready(function () {
	$(".design").click(function () {
		$(".design-icon").toggle();
		$(".design-description").toggle();
	});
	$(".development").click(function () {
		$(".development-icon").toggle();
		$(".development-description").toggle();
	});
	$(".product").click(function () {
		$(".product-icon").toggle();
		$(".product-description").toggle();
	});
});

$(document).ready(function () { 
		$(".name").show();
	}, function () {
		$(".name").hide();
	});

function sendtext() {
	var name = $("#FNAME").val();
    var name = $("#MNAME").val();
	var email = $("EMAIL").val();

	if (name === "" || email === "") {
		alert("Please fill in all your details")
	} else {
		alert("Thank you " + name + "! We shall get back to you shortly, Thank you.");
		document.getElementById("").reset();
	};
};
$(document).ready(function () {
    document.getElementById("form").addEventListener("submit", popUp);
    function popUp() {
        alert("Your feedback has been received.");
    }
});
