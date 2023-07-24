<?php
// process.php

// variables ======================================================
    
	$email_to = "contact@mokeez.com";
	$email_subject = "LP Free AdWords Audit Request";
	$email_from = "noreply@mokeez.com";
	$name = $_POST['name']; // required
	$email_from_customer = $_POST['email']; // required
	$telephone = $_POST['phone']; // required
	$telephone_full = $_POST['phone_full']; // hidden not required
	$domain = $_POST['domain']; // required
	$message = $_POST['message']; // not required

// return a response ===============================================

	$email_message = "Form details below.\n\n";


	function clean_string($string) {
	  $bad = array("content-type","bcc:","to:","cc:","href");
	  return str_replace($bad,"",$string);
	}


	$email_message .= "Name: ".clean_string($name)."\n";
	$email_message .= "Email: ".clean_string($email_from_customer)."\n";
	$email_message .= "Telephone: ".clean_string($telephone)."\n";
	$email_message .= "Telephone full: ".clean_string($telephone_full)."\n";
	$email_message .= "URL: ".clean_string($domain)."\n";
	$email_message .= "Message: ".clean_string($message)."\n";

	// create email headers
	$headers = 'From: '.$email_from."\r\n".
	//'Reply-To: '.$email_from."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	@mail($email_to, $email_subject, $email_message, $headers);
        

    // redirect to thankyou page ===================================
	header('Location: thankyou.html');
	exit;