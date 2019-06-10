
<?php



$connect = new PDO('mysql:host=localhost;dbname=chien', 'root', '');

if(isset($_POST["title"]))
{
 $query = " INSERT INTO event
  (eventTitle, eventStart, eventEnd, clientId, userId, eventTypeId, animalId, eventObs)
 VALUES (?,?,?,?,?,?,?,?)";
 $statement = $connect->prepare($query);
 $statement->execute(
   array($_POST['title'], $_POST['start_event'], $_POST['end_event'], $_POST['client_event'], '1', '1',$_POST['animal_event'],$_POST['obs_event'])
 );
 

 return ;
 




}
