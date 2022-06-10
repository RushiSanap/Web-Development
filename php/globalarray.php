<?php 
//variable declared outside the function has global scope
//global variables is stored in a array called GLOBALS
//can be directly access in a function using array
//index holds the name of the variable
$x = 5;
$y = 10;
	
function myTest() {
	$GLOBALS["x"] = $GLOBALS["y"] + $GLOBALS["x"];	
}
myTest();
echo $x;
?>
