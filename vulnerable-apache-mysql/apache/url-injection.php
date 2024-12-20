<?php
$servername = "mysql";
$username = "root";
$password = "rootpassword";
$dbname = "testdb";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recibir parámetros del usuario
$nombre = $_GET['nombre'];

# exploit: 
#

// Consulta vulnerable
$sql = "SELECT nombre FROM usuarios WHERE nombre = '$nombre'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<h2>Resultados para el usuario '$nombre':</h2>";
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . " - Nombre: " . $row["nombre"] . "<br>";
    }
        echo "He mandado la siguiente sentencia SQL:" . "<br>";
        echo "SELECT nombre FROM usuarios WHERE nombre = '$nombre'" . "<br>";

} else {
    echo "No hay resultados para el usuario '$nombre'.";
    echo "He mandado la siguiente sentencia SQL:" . "<br>";
    echo "SELECT nombre FROM usuarios WHERE nombre = '$nombre'" . "<br>";
}

# exploit con:
# curl -X GET "http://localhost:8080/url-injection.php?nombre=juan%27%20OR%20%271%27=%271"

$conn->close();
?>
