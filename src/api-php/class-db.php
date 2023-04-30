<?php
  class Db {
    private $server = "localhost";
    private $dbname = "id20636126_db_videogame_exchange";
    private $user =  "id20636126_root";
    private $password = "1G){gmms8xGj}]&L";
    private $conn = null;

    public function __construct(){
      $connectionString = "mysql:host=".$this->server.";dbname=".$this->dbname;
      try{
        $this->conn = new PDO($connectionString, $this->user, $this->password);
        $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      }catch(PDOException $error){
        echo $error;
      }
    } 


    public function createUser($userName, $email, $password){
      $query = "INSERT INTO users (user_name, email, password) 
                VALUES ('$userName' ,'$email', '$password')";
      $this->conn->exec($query);
      $result = array("user" => "user {$userName} created");
      echo json_encode($result);
    }
    
    
    public function validateUser($userName, $password){
          $query = "SELECT password FROM users WHERE user_name = '$userName'";
          $statement = $this->conn->prepare($query);
          $statement->execute();
          $result = $statement->fetchAll();
          if (count($result) > 0){
            $passwordHash = $result[0]["password"];
            $isSamePassword = password_verify($password, $passwordHash);
            echo json_encode(array("correctCredentials" => $isSamePassword));
          } else {
            echo json_encode(array("correctCredentials" => "user does not exist"));
          }
    }
    
    
    public function postgame($user_id, $image, $name_of_game, $console_type, $is_new, $description){
        $query = "INSERT INTO posts (user_id, image, name_of_game, console_type, is_new, description )
                  VALUES ('$user_id', '$image', '$name_of_game', '$console_type', '$is_new', '$description')";
        $this->conn->exec($query);
        echo json_encode(array("result" => "posted game"));
    }
    
    
    public function getAllPosts(){
        $result = array();
        $query = "SELECT * FROM posts";
        $statement = $this->conn->prepare($query);
        $statement->execute();
        while ($data = $statement->fetch()){
            $result[] = array(
                "post_id" => $data["post_id"],
                "user_id" => $data["user_id"],
                "name_of_game" => $data["name_of_game"],
                "console_type" => $data["console_type"],
                "is_new" => $data["is_new"],
                "description" => $data["description"],
                "image" => base64_encode($data["image"])
              );
        }
        echo json_encode($result);
    }
  }
?>