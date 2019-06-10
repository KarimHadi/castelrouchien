<?php
require_once('./mod.calendrier/modele/modeleCalendar.php');
$tpl = new Smarty();
$clientListe= getAllClient();
$animalListe= getAllAnimal();

$tpl -> assign('photo', $_SESSION['auth']['userPhoto']);
$tpl -> assign('id', $_SESSION['auth']['userId']);
$tpl -> assign('nom', $_SESSION['auth']['userName']);
$tpl -> assign('prenom', $_SESSION['auth']['userFirstname']);
$tpl -> assign('mail', $_SESSION['auth']['userMail']);
$tpl -> assign('telephone', $_SESSION['auth']['userPhone']);
$tpl -> assign('Rang', $_SESSION['auth']['roleName']);
$tpl -> assign('pagename', $_SESSION['match']['name']);
$tpl -> assign('clientListe', $clientListe);
$tpl -> assign('animalListe', $animalListe );
foreach($clientListe as $row){
    $data[]=array(
    'clientId'  => $row["clientId"],
    'clientName'  => $row["clientName"]        
);

}



$clientListe2= json_encode($data);


$tpl -> assign('clientListe', $clientListe);





$tpl -> display('./mod.calendrier/vue/calendar.tpl');
