<?php
	session_start();
	define('DB_SERVER',"localhost/phpmyadmin");
	define('DB_USERNAME',"root");
	define('DB_PADDWORD',"");
	define('DB_DATABASE',"livebuy");

	$data = $_POST['RequestSubmit'];
    $RentName = _POST ['RentName'];
    $RentNumber = _POST ['RentNumber'];
    $RentEmail = _POST ['RentEmail'];

	if ($con)
	{
	  die( "Failed to connect to MySQL:" . mysqli_connect_error());
	}


?>