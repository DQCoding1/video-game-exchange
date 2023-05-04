<?php
  class Db {
    private $server = "localhost";
    private $dbname = "id20699209_dbvideogame";
    private $user =  "id20699209_root";
    private $password = "/!#(7k20^vyIQ0_0";
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
      $createUserQuery = "INSERT INTO users (user_name, email, password) 
                VALUES ('$userName' ,'$email', '$password')";
      $this->conn->exec($createUserQuery);
      
      
      $getUserCreatedQuery = "SELECT id, user_name FROM users WHERE user_name = '$userName'";
      $statement = $this->conn->prepare($getUserCreatedQuery);
      $statement->execute();
      $result = $statement->fetchAll();
        $user_id = $result[0]["id"];
        $user_name = $result[0]["user_name"];
        echo json_encode(array(
            "user_id" => $user_id,
            "user_name" => $user_name
            ));
      }
      
    
    
    public function validateUser($userName, $password){
          $query = "SELECT id, password FROM users WHERE user_name = '$userName'";
          $statement = $this->conn->prepare($query);
          $statement->execute();
          $result = $statement->fetchAll();
          if (count($result) > 0){
            $user_id = $result[0]["id"];
            $passwordHash = $result[0]["password"];
            $isSamePassword = password_verify($password, $passwordHash);
            echo json_encode(array(
                "correctCredentials" => $isSamePassword,
                "user_id" => $user_id,
                ));
          } else {
            echo json_encode(array("correctCredentials" => "user does not exist"));
          }
    }
    
    
    
    public function postgame($user_id, $name_of_game, $console_type, $is_new, $description, $image){
        $query = "INSERT INTO posts (user_id, name_of_game, console_type, is_new, description, image)
                  VALUES ('$user_id', '$name_of_game', '$console_type', '$is_new', '$description', '$image')";
        $this->conn->exec($query);
        echo json_encode(array("result" => "posted game"));
    }
    
    
    
    public function getUserName($user_id){
      $query = "SELECT user_name FROM users WHERE id = $user_id";
      $statement = $this->conn->prepare($query);
      $statement->execute();
      $data = $statement->fetch();
      echo json_encode(array("user_name" => $data["user_name"]));
    }
    
    
    public function getUsersAndEmails(){
      $result = array();
      $query = "SELECT user_name, email FROM users";
      $statement = $this->conn->prepare($query);
      $statement->execute();
      while ($data = $statement->fetch()){
        $result[] = array(
                "user_name" => $data["user_name"],
                "email" => $data["email"]
            );
      }
      echo json_encode($result);
    }
    
    
    
    public function getLastPostByUser($user_id){
        $result = array();
        $query = "SELECT * FROM posts
                  WHERE user_id = '$user_id'
                  ORDER BY post_id DESC
                  LIMIT 1";
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
    
    
    
    public function deletePost($post_id){
        $query = "DELETE FROM posts WHERE post_id = '$post_id'";
        $this->conn->exec($query);
        echo json_encode(array("result" => "post $post_id deleted"));
    }
  }
?>