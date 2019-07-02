<?php

$data = json_decode(file_get_contents('php://input'), true);

$username = $data['username'];
$password = $data['password'];

//$username= $_GET["username"];
//$password= $_GET["password"];

if($username == 'admin' && $password == '1234'){
    echo 1;
} else {
    echo 0;
} 

?>

