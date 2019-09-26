<?php
$fio = $_POST['name'];
$tel = $_POST['tel'];
$textarea = $_POST['textarea'];
$fio = htmlspecialchars($fio);
$tel = htmlspecialchars($tel);
$fio = urldecode($fio);
$tel = urldecode($tel);
$fio = trim($fio);
$tel = trim($tel);

if (mail("frontend@rgb-agency.com.ua", "Заявка с сайта", "ФИО:".$fio.". Tel: ".$tel. "From: example2@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>