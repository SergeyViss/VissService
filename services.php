<?php
require_once('db.php');
$name = $_POST["name"];
$number = $_POST["number"];
$auto = $_POST["auto"];
$text = $_POST["text"]; 

if (empty($name) || empty($number) || empty($auto) || empty($text) ){
    echo "заполнены не все поля";
}
else
{
    
        $sql = "INSERT INTO record (name,number,auto,text) VALUES ('$name', '$number', '$auto', '$text')";
        $conn -> query($sql);
}

header('Location: index.html ');
?>
