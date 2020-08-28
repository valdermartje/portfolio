<?php

if(isset($_POST['send-email'])) {
    $name = $_POST['name'];
    $emailFrom = $_POST['emailFrom'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    if (empty($_POST['name']) && empty($_POST['emailFrom'] && empty($_POST['subject'] && empty($_POST['message'])) die();

    http_response_code(200);
    $mailMe = "info@vreesign.nl";

    $mailTo = $mailMe;
    $headers = "From: " . $emailFrom;
    $text = "U heeft een email van: $name\n\n$message";

    mail($mailTo, $subject, $text, $headers);
    header("Location: ../../");
}