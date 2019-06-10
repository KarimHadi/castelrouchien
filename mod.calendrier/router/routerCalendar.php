<?php

$router = new AltoRouter();


$router-> map('GET|POST', '/calendar/load/[*:s]' , function() {
	require('./mod.calendrier/controler/load.php');
} , 'calendrierload');

$router-> map('GET', '/calendrier/Calendar' , function() {
 require('./mod.calendrier/controler/calendar.php');
} , 'Calendrier' );




$match = $router->match();

if( is_array($match) && is_callable( $match['target'] ) ) {
	$_SESSION['match']['params'] = $match['params'];
	$_SESSION['match']['name'] = $match['name'];

	call_user_func_array( $match['target'], $match['params'] );
} else {
	// no route was matched
	header( $_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
}
