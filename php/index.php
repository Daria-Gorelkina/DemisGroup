<?php
require 'db.php';
global $conn;

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Vary: Origin');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    if (isset($data['name'], $data['address'], $data['phone'], $data['email'])) {
        $stmt = $conn->prepare("INSERT INTO users (name, address, phone, email) VALUES (?, ?, ?, ?)");
        $stmt->bind_param('ssss', $data['name'], $data['address'], $data['phone'], $data['email']);
        if ($stmt->execute()) {
            echo json_encode(["status" => "success"]);
        } else {
            echo json_encode(["status" => "error", "message" => $stmt->error]);
        }

        $stmt->close();
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid input data"]);
    }
} else {
    $result = $conn->query("SELECT * FROM users");

    if ($result) {
        $users = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($users);
    } else {
        echo json_encode(["status" => "error", "message" => $conn->error]);
    }

    $result->free();
}

$conn->close();
?>
