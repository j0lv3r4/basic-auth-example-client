(function($) {
	var $buttonLogin = $('#button-login'),
		$buttonSignup = $('#button-signup'),
		$formLoginContainer = $('.form-login'),
		$formSignupContainer = $('.form-signup'),
		$formLogin = $('#form-login'),
		$formSignup = $('#form-signup'),
		$data = $('.data'),
		endpoint = "http://0.0.0.0:8080/";

  // show and hide forms
	$buttonLogin.on('click', function() {
		$formLoginContainer.show();
		$formSignupContainer.hide();
	});

	$buttonSignup.on('click', function() {
		$formSignupContainer.show();
		$formLoginContainer.hide();
	});

	// login form
	$formLogin.on('submit', function(e) {
	
	});
	
	// signup form
	$formSignup.on('submit', function(e) {
		e.preventDefault();

		console.log("yo");

		var email = $(this).find('input[type="email"]').val(),
			password = $(this).find('input[type="password"]').val();

		console.log(email);
		console.log(password);

		$.ajax({
			url: endpoint + "create",
			data: { 
				email: email, 
				password: password 
			},
			type: 'POST',
			success: function(data) {
				var html = [
					"<div class='alert-success'>",
						data,
					"</div> <!-- .alert-success -->"
				];

				$data.html(html);	
			},
			error: function(data) {
				var html = [
					"<div class='alert-error'>",
						data,
					"</div> <!-- .alert-error -->"
				];

				$data.html(html);			 
			}
		})
	});

	// request test
	$('.btn').on('click', function(e) {
		e.preventDefault();

		$.ajax({
			url: endpoint,
			type: 'GET',
			success: function(data) {
				console.log(data);	
			}
		});
	});
})(jQuery);
