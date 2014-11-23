<?php
//print json_encode($_SERVER['HTTP_REFERER']);
$email = $_GET['email'];
$myfile = fopen("usuarios.txt", "a");

fwrite($myfile, $email . ";\n");
fclose($myfile);