<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Change the following email address to your own
    $to = "taaa76902@egmail.com";
    $subject = "New Contact Form Submission";

    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mailBody = "
        <html>
        <body>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Message:</strong> $message</p>
        </body>
        </html>
    ";

    // Send the email
    mail($to, $subject, $mailBody, $headers);

    // Send a JSON response for AJAX handling
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => "Invalid request"]);
}
?>
