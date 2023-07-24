$(document).ready(function() {
	$("#phone").intlTelInput({
	  initialCountry: "auto",
	  geoIpLookup: function(callback) {
		$.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
		  var countryCode = (resp && resp.country) ? resp.country : "";
		  callback(countryCode);
		});
	  },
	  utilsScript: "js/utils.js" // just for formatting/placeholders etc
	});
		
	$("form").submit(function(event) {
		$('.form-group').removeClass('has-error'); // remove the error class
    	$('.help-block').remove(); // remove the error text
		$('#thankyouMessage').remove(); // remove the success text 
		$("#hidden").val($("#phone").intlTelInput("getNumber")); // calculate the full phone
        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
		var privacypolicy = $('input[name=privacypolicy]').is(':checked') ? $('input[name=privacypolicy]').val() : '';
		var directmarketing = $('input[name=directmarketing]').is(':checked') ? $('input[name=directmarketing]').val() : '';
		
        var formData = {
            'name'              : $('input[name=name]').val(),
            'email'             : $('input[name=email]').val(),
			'phone'             : $('input[name=phone]').val(),  
            'phone_full'        : $('input[name=phone_full]').val(),
			'formname'          : $('input[name=formname]').val(),
			'privacypolicy'     : privacypolicy,
			'directmarketing'   : directmarketing,
			'message'           : $('textarea[name=message]').val()
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'processContact.php', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
            encode      : true,
        })
            // using the done promise callback
            .done(function(data) {
				
				// log data to the console so we can see
				//console.log(data);
		
				// here we will handle errors and validation messages
				if ( ! data.success) {
		
					// handle errors for name ---------------
					if (data.errors.name) {
						$('#name-group').addClass('has-error'); // add the error class to show red input
						$('#name-group').append('<div class="help-block">' + data.errors.name + '</div>'); // add the actual error message under our input
					}
		
					// handle errors for email ---------------
					if (data.errors.email) {
						$('#email-group').addClass('has-error'); // add the error class to show red input
						$('#email-group').append('<div class="help-block">' + data.errors.email + '</div>'); // add the actual error message under our input
					}
					
					// handle errors for email ---------------
					if (data.errors.privacypolicy) {
						$('#privacypolicy-group').addClass('has-error'); // add the error class to show red input
						$('#privacypolicy-group').append('<div class="help-block">' + data.errors.privacypolicy + '</div>'); // add the actual error message under our input
					}
		
				} else {
		
					// ALL GOOD! just show the success message!
					$('form').prepend('<div class="alert alert-success" id="thankyouMessage"><h2>' + data.message + '</h2></div>');
					window.scrollTo(0, 0);
					$('form input').attr('disabled', 'disabled');
					$('form button').attr('disabled', 'disabled');
					$('form textarea').attr('disabled', 'disabled');
					// usually after form submission, you'll want to redirect
					// window.location = '/thank-you'; // redirect a user to another page
					//alert('success'); // for now we'll just alert the user
		
				}
			});

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});