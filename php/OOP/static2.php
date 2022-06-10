<?php
class base {
	protected static function fun1() {
		echo "Hello World!";
	}
}

class derived extends base {
	public function fun2() {
		parent::fun1();
	}
}

$class = new derived();
$class->fun2();
?>
