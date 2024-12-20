<?php
$servername = "mysql";
$username = "testuser";
$password = "testpassword";
$dbname = "testdb";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recibir parámetros del usuario
$usuario = $_GET['usuario'];
$password = $_GET['password'];

echo "<h2>Usuario: $usuario</h2>";
echo "<h2>Contraseña: $password</h2>";

// Consulta vulnerable
$sql = "SELECT * FROM usuarios WHERE nombre = '$usuario' AND password = '$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "¡Bienvenido $usuario!";
} else {
    echo "Credenciales incorrectas.";
}

$conn->close();
?>