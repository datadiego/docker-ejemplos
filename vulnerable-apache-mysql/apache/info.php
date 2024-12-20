<?php
//this php shows a hello world and the current time

echo "<h1>Hola desde php!</h1>";
echo "<p>Current time: " . date("Y-m-d H:i:s") . "</p>";
echo "<p>Path: " . $_SERVER['REQUEST_URI'] . "</p>";
echo "<p>Query string: " . $_SERVER['QUERY_STRING'] . "</p>";
echo "<p>Method: " . $_SERVER['REQUEST_METHOD'] . "</p>";
echo "<p>IP: " . $_SERVER['REMOTE_ADDR'] . "</p>";
echo "<p>Port: " . $_SERVER['REMOTE_PORT'] . "</p>";
echo "<p>User agent: " . $_SERVER['HTTP_USER_AGENT'] . "</p>";
echo "<p>Referer: " . $_SERVER['HTTP_REFERER'] . "</p>";
echo "<p>Server name: " . $_SERVER['SERVER_NAME'] . "</p>";
echo "<p>Server IP: " . $_SERVER['SERVER_ADDR'] . "</p>";
echo "<p>Server port: " . $_SERVER['SERVER_PORT'] . "</p>";

//try to connect to the database
$servername = "mysql";
$username = "testuser";
$password = "testpassword";
$dbname = "testdb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo "<p>Connection failed: " . $conn->connect_error . "</p>";
} else {
    echo "<p>Connection to MySQL successful!</p>";
}
?>