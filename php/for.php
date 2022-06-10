<?php
$num = 10;
$flag = 0;
for($i = 2; $i < $num; $i++) {
	if($num % $i == 0) {
		$flag = 1;
	}
}
if($flag == 0) {
	echo "$num is a prime number";
}
else {
	echo "$num is a composite number";
}
?>
