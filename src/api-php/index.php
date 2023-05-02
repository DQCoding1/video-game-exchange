<?php
  header("Content-Type: application/json");
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

  include("./class-db.php");

  switch($_SERVER["REQUEST_METHOD"]){
    case "GET":
        $conn = new Db();
        if (isset($_GET["user_id"])){
          $conn->getUserName($_GET["user_id"]);
        }
        else if (isset($_GET["users_and_emails"])){
          $conn->getUsersAndEmails();        
        }
        else if (isset($_GET["lastPostByUser"])){
          $conn->getLastPostByUser($_GET["lastPostByUser"]);        
        }
         else {
          $conn->getAllPosts();
          break;
        }
      
      
    case "POST":
      $userInfo = json_decode(file_get_contents("php://input"), true);
      $conn = new Db();
      if ($userInfo["action"] === "signup"){
        $passwordHash = password_hash($userInfo["password"], PASSWORD_DEFAULT);
        $conn->createUser($userInfo["user_name"], $userInfo["email"], $passwordHash);
      } else if ($userInfo["action"] === "login"){
        $passwordHash = password_hash($userInfo["password"], PASSWORD_DEFAULT);
        $conn->validateUser($userInfo["user_name"], $userInfo["password"]);
      } 
      break;
  }
?>