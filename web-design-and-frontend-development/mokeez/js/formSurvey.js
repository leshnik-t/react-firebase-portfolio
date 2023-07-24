$(document).ready(function() {
	$("form button[type=submit]").on("click", function() {
        $("button[type=submit]").removeAttr("clicked");
        $(this).attr("clicked", "true");
    });
	$("form").submit(function(event) {
		var val = $("button[type=submit][clicked=true]").attr("data-value");
		
        var formData = {
            'val'              : val,
        };

        // process the form
        $.ajax({
            type        : 'POST', 
            url         : 'processSurvey.php', 
            data        : formData, 
            dataType    : 'json', 
            encode      : true
        })
            // using the done promise callback
            .done(function(data) {
				// here we will handle errors and validation messages
				if ( data.success) {
					// ALL GOOD! just show the success message!
					$('form').prepend('<div class="alert alert-success" id="thankyouMessage"><h4>' + data.message + '</h4></div>');
					$('form button').attr('disabled', 'disabled');
				}
			});

        event.preventDefault();
    });

});