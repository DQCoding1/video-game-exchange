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
  }
?>