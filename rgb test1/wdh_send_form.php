if(mail($_POST['budr245@gmail.com'],'тестовый заголовок письма',$_POST['text'],'Content-type: text/html; charset=utf-8')){
    echo 'Сообщение отправлено!';
}
else{
    echo 'Ошибка отправки сообщения.';
}