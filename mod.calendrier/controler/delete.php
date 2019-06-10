<?php

//delete.php
$connect = new PDO('mysql:host=localhost;dbname=chien', 'root', '');
if(isset($_POST["id"]))
{
 $query = "DELETE from event WHERE eventId=? ";
 $statement = $connect->prepare($query);
 $statement->execute(array($_POST['id']));
}
