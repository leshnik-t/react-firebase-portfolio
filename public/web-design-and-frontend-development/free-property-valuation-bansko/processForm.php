<?php
// process.php

// variables ======================================================
    
	$email_to = "info@bulgarianskiproperties.com";
	$email_subject = "Free Property Valuation";
	$email_from = "noreply@freepropertyvaluationbansko.com";
	$name = $_POST['name']; // required
	$email_from_customer = $_POST['email']; // required
	$telephone = $_POST['phone']; // required
	$location = $_POST['location']; // not required
	$development = $_POST['development']; // not required
	$property_type = $_POST['property_type']; // not required
	$furnishing = $_POST['furnishing']; // not required
	$userIpAddress = (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
	   ? $_SERVER['HTTP_X_FORWARDED_FOR']
	   : (!empty($_SERVER['REMOTE_ADDR']))
		  ? $_SERVER['REMOTE_ADDR']
		  : '[unknown IP]'
	;  


// return a response ===============================================

	$email_message = "Form details below.\n\n";


	function clean_string($string) {
	  $bad = array("content-type","bcc:","to:","cc:","href");
	  return str_replace($bad,"",$string);
	}


	$email_message .= "Name: ".clean_string($name)."\n";
	$email_message .= "Email: ".clean_string($email_from_customer)."\n";
	$email_message .= "Telephone: ".clean_string($telephone)."\n";
	$email_message .= "Location: ".clean_string($location)."\n";
	$email_message .= "Development: ".clean_string($development)."\n";
	$email_message .= "Property Type: ".clean_string($property_type)."\n";
	$email_message .= "Furnishing: ".clean_string($furnishing)."\n";
	$email_message .= "IP: ".clean_string($userIpAddress)."\n";


	// create email headers
	$headers = 'From: '.$email_from."\r\n".
	//'Reply-To: '.$email_from."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	@mail($email_to, $email_subject, $email_message, $headers);
        

    // redirect to thankyou page ===================================
	header('Location: thankyou.html');
	exit;