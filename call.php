<?php
require_once('db.php');
$name_call = $_POST["name_call"];
$number_call = $_POST["number_call"];
$text_call = $_POST["text_call"]; 
echo $name_call;
echo $number_call;
echo $text_call;

if (empty($name_call) || empty($number_call) || empty($text_call) ){
    echo "заполнены не все поля";
}
else
{
        $sql = "INSERT INTO callservices (name,number,text,) VALUES ('$name_call', '$number_call', '$text_call')";
        $conn -> query($sql);
}

header('Location: index.html ');
?>
