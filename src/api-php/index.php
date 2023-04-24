<?php
  header("Content-Type: application/json");
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

  include("./class-db.php");

  switch($_SERVER["REQUEST_METHOD"]){
    case "POST":
      $userInfo = json_decode(file_get_contents("php://input"), true);
      $passwordHash = password_hash($userInfo["password"], PASSWORD_DEFAULT);
      $conn = new Db();
      $result = $conn->createUser($userInfo["user_name"], $userInfo["email"], $passwordHash);
      break;
  }
  
?>