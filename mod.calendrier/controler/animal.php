<?php
$id = $_POST['clientId'];
$connect2 = new PDO('mysql:host=localhost;dbname=chien', 'root', '',array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
$query2 = "SELECT animalId, animalName, clientId FROM animal WHERE clientId = $id ORDER BY clientId";
$statement2 = $connect2->prepare($query2);
$statement2->execute();
$liste = $statement2->fetchall(PDO::FETCH_ASSOC);
echo json_encode($liste);

