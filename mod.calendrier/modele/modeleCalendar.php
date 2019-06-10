<?php


function insertDataCalendrier($eventTitle, $eventStart, $eventEnd, $clientName, $animalName, $eventObs){
    $cnx = getbd();
    $sql = 'INSERT INTO event
    (eventTitle, eventStart, eventEnd, clientName, animalName,animalObs)
    VALUES (?, ?, ?, ?, ?, ?)';
    $idRequete = executeRequete($cnx, $sql, array($eventTitle, $eventStart, $eventEnd, $clientName, $animalName, $eventObs));
    $liste = $idRequete->fetchall();
    return $liste;
}



    
    function getAnimalByClientId($Id){
    $cnx = getbd();
    $sql = 'SELECT animalId, animalSexe, animalAffixe, animalName, animalBirthDate, animalObs, animalRace FROM animal WHERE isDeleted = 0 AND clientId = ?';
    $idRequete = executeRequete($cnx, $sql, array($Id));
    $liste = $idRequete->fetchall(PDO::FETCH_ASSOC);
    return $liste;
}

/**
 * fonction getAllClient() -> retourne la liste des clients
 * @return retourne $row, un tableau comportant toute les clients contenus dans la base
 */
function getAllClient() {
	$cnx= getBD();
	$sql= 'SELECT clientId, clientName, clientFirstname FROM client WHERE isDeleted = 0 ORDER BY clientName';
	$idRequete= executeRequete($cnx, $sql);
	$liste = $idRequete->fetchall(PDO::FETCH_ASSOC);
    return $liste;
}

function getAllAnimal() {
    $cnx= getBD();
	$sql= 'SELECT animalId, animalName FROM animal WHERE isDeleted = 0 ORDER BY animalName';
	$idRequete= executeRequete($cnx, $sql);
	$liste = $idRequete->fetchall(PDO::FETCH_ASSOC);
    return $liste;
}