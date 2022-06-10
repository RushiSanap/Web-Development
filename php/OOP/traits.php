<?php
trait message1 {
	public function msg1() {
		echo "OOP is fun!";
	}
}

trait message2 {
	public function msg2() {
		echo "OOP reduces code duplication!";
	}
}

class class1 {
	use message1;
}

class class2 {
	use message1, message2;
}

$obj1 = new class1();
$obj1->msg1();
?>
