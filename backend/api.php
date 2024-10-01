<?php
    $disksString = file_get_contents('db/disks.json');
    //var_dump($disksString);

    $disks = json_decode($disksString, true);
    //var_dump($disks);

    header('Content-type: application/json');
    echo json_encode($disks);
?>
