<?php
$servername = "localhost";
$username = "Viss";
$password = "1234";
$dbname = "services";

$conn = mysqli_connect($servername, $username, $password, $dbname);
//Проверка подключение к БД.
// if(!$conn){
//     echo"БД нет";
// }
// else{
//     echo"БД да";
// }
?>