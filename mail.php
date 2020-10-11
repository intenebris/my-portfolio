<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'auto.websitesmakeuper@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'gsg4937jvkjsl483875jkkds2'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('auto.websitesmakeuper@gmail.com'); // от кого будет уходить письмо?
$mail->addAddress('m.manivchuk@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

function checkValue($item) {
	if (isset ($item) && trim($item) == ''){
		echo '<span class="input-error"> поле заполнено не корректно</span>';
	}
}
function checkWrite($writed) {
	if (isset ($writed) && strlen(trim($writed)) > 0) {
		echo $writed;
	}
}

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$token = "1387912816:AAErNAIQB8FTlujxvS_glYmMIi0EQ8NkmgU";
$chat_id = "-480115260";
$arr = array(
  'Имя пользователя: ' => $name,
  'Email: ' => $email,
  'Сообщение: ' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

if (!empty($_POST) && trim($_POST['name']) != '' && trim($_POST['email']) != '' && trim($_POST['message']) != '' && trim($_POST['checked']) == 'on') {
	$message = "Привет! Тебе пришло новое письмо с твоего сайта: <br>" . "\n " . 
			"<strong>Имя отправителя: </strong>" . strip_tags ($_POST['name']). "<br>"  . "\n" . 
			"<strong>Email отправителя: </strong>" . strip_tags ($_POST['email']). "<br>"  . "\n" . 
			"<strong>Текст сообщения: </strong> <br>" . "\n" . strip_tags ($_POST['message']). "<br>" ;
	

			$subject = "=?utf-8?B?". base64_encode("Письмо с сайта MY PORTFOLIO") . "?=" ;

			$email_from = ($_POST['email']);

			$name_from = "Личный сайт-портфолио";

			$headers =  "MIME-Version: 1.0" . PHP_EOL . 
						"Content-Type: text/html; charset=utf-8" . PHP_EOL .
						"From: " . "=?utf-8?B?". base64_encode($name_from) . "?=" . "<" . $email_from . ">" . PHP_EOL .
						"Replay-to: " . $email_from;

			mail ( 'm.manivchuk@gmail.com' , $subject , $message, $headers );
			
	$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

	header ('location: thankyou.html');
};

function checkEmail ($email){
	if (isset ($email) && trim($email) == '') {
		echo '<span class="input-error"> Email не указан</span>';
	}else if (isset ($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
		echo '<span class="input-error"> Email введен не корректно</span>';
	}
}

?>