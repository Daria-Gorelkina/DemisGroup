<?php
require 'db.php';
global $conn;

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Vary: Origin');

$result = $conn->query("SELECT * FROM news ORDER BY date DESC LIMIT 3");

if ($result) {
    $news = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($news);
} else {
    echo json_encode(["status" => "error", "message" => $conn->error]);
}

$result->free();

$conn->close();
?>
