<?php
$host = 'db';
$username = 'dev';
$password = '123';
$dbname = 'dev';
$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}
$conn->set_charset("utf8");
?>
