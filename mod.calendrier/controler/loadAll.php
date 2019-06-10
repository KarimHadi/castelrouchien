<?php

//load.php

$connect = new PDO('mysql:host=localhost;dbname=chien', 'root', '');
$data = array();
$query = "SELECT animalName, clientName,eventId,eventTitle,eventStart,eventEnd,event.clientId,event.animalId,eventTypeId,eventObs FROM event,animal,client WHERE event.clientId = client.clientId AND event.animalId = animal.animalId ORDER BY eventId";
$statement = $connect->prepare($query);
$statement->execute();
$result = $statement->fetchAll();
foreach ($result as $row) {

    $data[] = array(
        'id' => $row["eventId"],
        'title' => $row["eventTitle"],
        'start' => $row["eventStart"],
        'end' => $row["eventEnd"],
        'clientId' => $row["clientId"],
        'animalId' => $row["animalId"],
        'clientName'  => $row["clientName"],  
        'animalName' => $row["animalName"],
        'eventType' => $row["eventTypeId"],
        'obs' => $row["eventObs"]
    );
}

echo json_encode($data);
