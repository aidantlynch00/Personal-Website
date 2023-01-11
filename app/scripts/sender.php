<?php

require "/home/thelyn5/vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


$developmentMode = true;
$mailer = new PHPMailer($developmentMode);

try {
    $mailer->SMTPDebug = 2;
    $mailer->isSMTP();

    if ($developmentMode) {
    $mailer->SMTPOptions = [
        'ssl'=> [
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
        ]
    ];
    }


    $mailer->Host = 'mail.aidantlynch.com';
    $mailer->SMTPAuth = true;
    $mailer->Username = 'admin@aidantlynch.com';
    $mailer->Password = 'Lego4atl';
    $mailer->SMTPSecure = 'tls';
    $mailer->Port = 587;

    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $body = $_POST["body"];

    $mailer->setFrom($email, $name);
    $mailer->addAddress('admin@aidantlynch.com', 'Aidan Lynch');

    $mailer->isHTML(true);
    $mailer->Subject = $subject;
    $mailer->Body = $body;

    $mailer->send();
    $mailer->ClearAllRecipients();
    print "MAIL HAS BEEN SENT SUCCESSFULLY";

} catch (Exception $e) {
    print "EMAIL SENDING FAILED. INFO: " . $mailer->ErrorInfo;
}

?>