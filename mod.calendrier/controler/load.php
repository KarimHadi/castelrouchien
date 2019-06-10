<?php

//load.php

$connect = new PDO('mysql:host=localhost;dbname=chien', 'root', '');
$data = array();
$query = "SELECT * FROM event WHERE eventTypeId='1' ORDER BY eventId";
$statement = $connect->prepare($query);
$statement->execute();
$result = $statement->fetchAll();
foreach ($result as $row) {

    $data[] = array(
        'id' => $row["eventId"],
        'title' => $row["eventTitle"],
        'start' => $row["eventStart"],
        'end' => $row["eventEnd"],
        'eventType' => $row["eventTypeId"],
        'obs' => $row["eventObs"]
    );
}

echo json_encode($data);
