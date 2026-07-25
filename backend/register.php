<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$host = "localhost";
$db = "college";
$user = "root";
$pass = "**"; // change this to your actual password

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Database connection failed"]);
    exit;
}

$firstName = trim($_POST['firstName'] ?? '');
$lastName  = trim($_POST['lastName'] ?? '');
$email     = trim($_POST['email'] ?? '');
$program   = trim($_POST['program'] ?? '');

// Server-side validation
if (empty($firstName) || empty($lastName) || empty($email) || empty($program)) {
    echo json_encode(["status" => "error", "message" => "All fields are required"]);
    exit;
}

if (strpos($email, '@') === false) {
    echo json_encode(["status" => "error", "message" => "Invalid email"]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO students (firstName, lastName, email, program) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $firstName, $lastName, $email, $program);

if ($stmt->execute()) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => "Insert failed"]);
}

$stmt->close();
$conn->close();
?>