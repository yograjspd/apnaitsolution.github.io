<?php

    include('connection.php');


    $data = $_POST['RequestSubmit'];
    $RentName = _POST ['RentName'];
    $RentNumber = _POST ['RentNumber'];
    $RentEmail = _POST ['RentEmail'];

    // databash conections;
	$con = new mysqli_connect('localhost','root','','livebuy');

	if ($con->connect_error) {
	  die( "Connect Failed " : .$con->connect_error);
	} else {
		$stmt = $con->prepare("insert into registretion(RentName,RentNumber,RentEmail)value(?,?,?)");
		$stmt->bind_param($RentName,$RentNumber,$RentEmail");
	}


?>