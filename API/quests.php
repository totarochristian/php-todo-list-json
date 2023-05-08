<?php
  //Get data content from the file
  $dataContent = file_get_contents("data.json");
  //Convert the data content to an associative array
  $dataArray = json_decode($dataContent, true);

  // ... do other things ...

  //Set the content type of the data retrieved to the client
  header("Content-Type: application/json");
  //Print the array data in the page encoded in JS
  echo json_encode($dataArray);
