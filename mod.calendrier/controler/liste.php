<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Titre de la page</title>
  <link rel="stylesheet" href="style.css">
  <script src="script.js"></script>
</head>
<body>
 <tr>
    Pays
  
    <select name="pays">
 
<?php
$query = "SELECT eventId FROM event ORDER BY eventId";
$result = mysql_query($query);
 
while($row = mysql_fetch_array($result)){
echo '<option >'.$row["eventId"].'</option>';
}
?>
     </select>
  
</body>
</html>