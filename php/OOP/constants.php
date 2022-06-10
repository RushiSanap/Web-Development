<?php
class goodbye {
	const LEAVING_MESSEGE = "Thank you for visiting w3school.com!";
	function byebye() {
		echo self::LEAVING_MESSEGE;
	}
}

echo goodbye::LEAVING_MESSEGE;
$msg = new goodbye();
$msg->byebye();
?>

