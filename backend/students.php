<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$host = "localhost";
$db = "college_data";
$user = "root";
$pass = "**"; // change this to your actual password

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Database connection failed"]);
    exit;
}

$result = $conn->query("SELECT studentID, firstName, lastName, email, program FROM students ORDER BY studentID DESC");

$students = [];
while ($row = $result->fetch_assoc()) {
    $students[] = $row;
}

echo json_encode($students);

$conn->close();
?>