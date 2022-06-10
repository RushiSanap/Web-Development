<?php
$servername = "localhost";
$username = "root";
$password = "Rushi@123";

// create connection 
$conn = mysqli_connect($servername, $username, $password);
if(!$conn) {
	die("Connection failed: ".mysql_connect_error());
}
?>
