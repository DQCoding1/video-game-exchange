<?php 
  header("Content-Type: application/json");
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

  include("./class-db.php");

  switch($_SERVER["REQUEST_METHOD"]){
    case "POST":
        $user_id = $_POST["user_id"];
        $name_of_game = $_POST["name_of_game"];
        $console_type = $_POST["console_type"];
        $is_new = $_POST["is_new"];
        $description = $_POST["description"];
        $image = addslashes(file_get_contents($_FILES["image"]["tmp_name"]));
        $conn = new Db();
        $conn->postgame($user_id, $image, $name_of_game, $console_type, $is_new, $description);
      break;
  }

?>