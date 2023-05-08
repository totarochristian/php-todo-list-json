<?php
  //Get data content from the file
  $dataContent = file_get_contents("data.json");
  //Convert the data content to an associative array
  $dataArray = json_decode($dataContent, true);

  //If receive post request with the field quests
  if(isset($_POST["quests"])){
    //Update the current data array
    $dataArray = $_POST["quests"];
    //Update the file containing the data
    file_put_contents("data.json", json_encode($dataArray,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK));
  }

  //Set the content type of the data retrieved to the client
  header("Content-Type: application/json");
  //Print the array data in the page encoded in JS
  echo json_encode($dataArray,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK);
