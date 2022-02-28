<?php

$serveur_bd = 'localhost';
$nom_bd = 'acudb';
$utilisateur_bd = 'pgtidal';
$passe_bd= 'tidal';
$source_bd = "pgsql:host=$serveur_bd;port=5432;dbname=$nom_bd;user=$utilisateur_bd;password=$passe_bd";

try{
    $dbh = new PDO($source_bd);
    if($dbh){
        echo "<script> console.log(\"Connection à la BDD $nom_bd réussi\") </script>";
    }
}catch (PDOException $e){ // Génération d'une exception PHP PDO PostgreSQL
    echo $e->getCode() . ' ' . $e->getMessage();
}

$sql = 'SELECT * FROM patho WHERE mer = :maVar';
$sth = $dbh->prepare($sql);
$sth->execute(array(':maVar' => 'P'));
$data = $sth->fetchAll();

