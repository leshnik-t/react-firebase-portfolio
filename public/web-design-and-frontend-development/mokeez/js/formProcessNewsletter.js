$(document).ready(function() {
	$("#newsletterFormModal").submit(function(event) {
		// stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
		$('#newsletterFormModal .form-group').removeClass('has-error'); // remove the error class
    	$('#newsletterFormModal .help-block').remove(); // remove the error text
		$('#newsletterFormModal #thankyouMessage').remove(); // remove the success text 
		
        // there are many ways to get this data using jQuery (you can use the class or id also)
		var privacypolicyModal = $('input[name=privacypolicyModal]').is(':checked') ? $('input[name=privacypolicyModal]').val() : '';
		
        var formData = {
            'emailNewsletterModal'             : $('input[name=emailNewsletterModal]').val(),
			'privacypolicyModal'     : privacypolicyModal,
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'processNewsletterModal.php', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
            encode      : true,
        })
            // using the done promise callback
            .done(function(data) {
				
				// log data to the console so we can see
			console.log(data);
		
				// here we will handle errors and validation messages
				if ( ! data.success) {
		
					// handle errors for email ---------------
					if (data.errors.emailNewsletterModal) {
						$('#newsletterFormModal .email-group').addClass('has-error'); // add the error class to show red input
						$('#newsletterFormModal .email-group').append('<div class="help-block">' + data.errors.emailNewsletterModal + '</div>'); // add the actual error message under our input
					}
					
					// handle errors for email ---------------
					if (data.errors.privacypolicyModal) {
						$('#newsletterFormModal .privacypolicy-group').addClass('has-error'); // add the error class to show red input
						$('#newsletterFormModal .privacypolicy-group').append('<div class="help-block">' + data.errors.privacypolicyModal + '</div>'); // add the actual error message under our input
					}
		
				} else {
		
					// ALL GOOD! just show the success message!
					$('#newsletterFormModal').prepend('<div class="alert alert-success" id="thankyouMessage"><h2>' + data.message + '</h2></div>');
					$('#newsletterFormModal input').attr('disabled', 'disabled');
					$('#newsletterFormModal button').attr('disabled', 'disabled');
					setTimeout(function() {
						$("#newsletterModal").modal('toggle');
					}, 1000);
					// usually after form submission, you'll want to redirect
					// window.location = '/thank-you'; // redirect a user to another page
					//alert('success'); // for now we'll just alert the user
		
				}
			});

    });
	$("#newsletterForm").submit(function(event) {
		// stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
		$('#newsletterForm .form-group').removeClass('has-error'); // remove the error class
    	$('#newsletterForm .help-block').remove(); // remove the error text
		$('#newsletterForm #thankyouMessage').remove(); // remove the success text 
		
        // there are many ways to get this data using jQuery (you can use the class or id also)
		var privacypolicy = $('input[name=privacypolicy]').is(':checked') ? $('input[name=privacypolicy]').val() : '';
		
        var formData = {
            'emailNewsletter'             : $('input[name=emailNewsletter]').val(),
			'privacypolicy'     : privacypolicy,
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'processNewsletter.php', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
            encode      : true,
        })
            // using the done promise callback
            .done(function(data) {
				
				// log data to the console so we can see
			console.log(data);
		
				// here we will handle errors and validation messages
				if ( ! data.success) {
		
					// handle errors for email ---------------
					if (data.errors.emailNewsletter) {
						$('#newsletterForm .email-group').addClass('has-error'); // add the error class to show red input
						$('#newsletterForm .email-group').append('<div class="help-block">' + data.errors.emailNewsletter + '</div>'); // add the actual error message under our input
					}
					
					// handle errors for email ---------------
					if (data.errors.privacypolicy) {
						$('#newsletterForm .privacypolicy-group').addClass('has-error'); // add the error class to show red input
						$('#newsletterForm .privacypolicy-group').append('<div class="help-block">' + data.errors.privacypolicy + '</div>'); // add the actual error message under our input
					}
		
				} else {
		
					// ALL GOOD! just show the success message!
					$('#newsletterForm').prepend('<div class="alert alert-success" id="thankyouMessage"><h2>' + data.message + '</h2></div>');
					/*$('html, body').animate({
						scrollTop: $('#newsletterForm').offset().top + 'px'
					}, 'fast');*/
					$('#newsletterForm input').attr('disabled', 'disabled');
					$('#newsletterForm button').attr('disabled', 'disabled');
					
					// usually after form submission, you'll want to redirect
					// window.location = '/thank-you'; // redirect a user to another page
					//alert('success'); // for now we'll just alert the user
		
				}
			});

    });

});