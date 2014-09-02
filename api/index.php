<?php

require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim(array(
    'debug' => true
));

$app->response->headers->set('Content-Type', 'application/json');


function connect_db() {
    $server = 'mysqlv110'; // this may be an ip address instead
    $user = 'webgurucb';
    $pass = 'nycda5ch00L';
    $database = 'nycda_db';
    $connection = new mysqli($server, $user, $pass, $database);

    return $connection;
}

$app->get(
    '/', 
    function () use ($app) {

        $db = connect_db();
        $result = $db->query( 'SELECT * FROM faculty;' );
        while ( $row = $result->fetch_array(MYSQLI_ASSOC) ) {
            $data[] = $row;
        }
        echo json_encode($data);
        
});


$app->get(
    '/faculty', 
    function () use ($app) {
   
        $db = connect_db();
        $result = $db->query( 'SELECT * FROM faculty;' );
        while ( $row = $result->fetch_array(MYSQLI_ASSOC) ) {
            $data[] = $row;
        }
        echo json_encode($data);
        
});



$app->get(
	'/hello', 
	function(){
		echo "Hello";
	}
);
    

// POST route
$app->post(
    '/post',
    function () {
        echo 'This is a POST route';
    }
);

// PUT route
$app->put(
    '/put',
    function () {
        echo 'This is a PUT route';
    }
);

// PATCH route
$app->patch('/patch', function () {
    echo 'This is a PATCH route';
});

// DELETE route
$app->delete(
    '/delete',
    function () {
        echo 'This is a DELETE route';
    }
);


$app->run();
