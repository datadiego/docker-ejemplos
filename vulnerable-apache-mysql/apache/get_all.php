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
echo "<h1>¡Conexión exitosa a MySQL desde PHP!</h1>";

// Ejecutar consulta
$sql = "SELECT nombre, password FROM usuarios";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<h2>Datos de la tabla:</h2>";
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"]. " - Nombre: " . $row["nombre"]. " - Password: " . $row["password"]. "<br>";
    }
} else {
    echo "No hay datos.";
}
$conn->close();
?>