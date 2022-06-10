<?php 
function addNumber(&$value) {
	return $value += 5;
}
$num = 3;
addNumber($num);
echo $num;
?>
