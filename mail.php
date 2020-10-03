<?php

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