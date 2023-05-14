<?php
error_reporting(E_ALL);
// Get form input values
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Set up email headers
$to = 'your-email@example.com'; // Replace with your email address
$subject = 'New Message from Contact Form';
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

// Compose the email body
$body = "Name: $name\n\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message";

// Send the email
$mailSent = mail($to, $subject, $body, $headers);

// Set up the response message
$response = [
  'success' => $mailSent,
  'message' => $mailSent ? 'Thank you! Your message has been sent successfully.' : 'Oops! There was a problem sending your message.'
];

// Convert the response to JSON format
$responseJSON = json_encode($response);

// Output the JSON response
header('Content-Type: application/json');
echo $responseJSON;
?>