<?php
  class db {
    private $server = "localhost";
    private $dbname = "id20636126_db_videogame_exchange";
    private $user =  "id20636126_root";
    private $password = "1G){gmms8xGj}]&L";
    
    public function __construct(){
      try{
        $conn = new PDO("mysql:host=$server;dbname=$dbname", $user, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->conn = $conn;
      }catch(PDOException $error){
        echo $error;
      }
    } 
  }
?>