<?php
  header("Content-Type: application/json");
  include("./class-db.php");

  switch($_SERVER["REQUEST_METHOD"]){
    case "POST":
      $userInfo = json_decode(file_get_contents("php://input"), true);
      $passwordHash = password_hash($userInfo["password"], PASSWORD_DEFAULT);
      $conn = new Db();
      $conn->createUser($userInfo["user_name"], $userInfo["email"], $passwordHash);
      break;
  }
?>