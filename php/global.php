<?php 
//variable declared outside the function has global scope
//cannot be accessed by the function
//accessible only outside the function
$x = 5;
$y = 10;
	
function myTest() {
	global $x, $y;
	$y = $x + $y;
}

myTest();
echo $y;
?>
