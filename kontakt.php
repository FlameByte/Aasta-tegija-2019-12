<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="Teema: $name \n Sõnum: $message";
$recipient = "henri.lindret@khk.ee";
$subject = "Kontaktivorm";
$mailheader = "Nimi: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Aitäh!";
?>