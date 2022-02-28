<?php
require_once('../smarty/libs/Smarty.class.php');

$smarty = new Smarty();
$smarty->setTemplateDir('/var/www/html/template');
$smarty->setCompileDir('/var/www/html/template_c');
$smarty->setConfigDir('/var/www/html/configs');
$smarty->setCacheDir('/var/www/html/cache');

$smarty->display('nav.tpl');

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

$sql = 'SELECT * FROM users ';
$sth = $dbh->prepare($sql);
$sth->execute();
$comptes = $sth->fetchAll();

if (isset($_GET['submit'])){
    $user_form = $_GET['user'];
    $pass_form = $_GET['pass'];
    
    foreach ($comptes as $compte)
    {
        if($comptes['username'] == $user_form && $comptes['pass'] == $pass_form)
        {
            echo "<script> console.log(\"Connexion réussie\") </script>";
        }

        else
        {
            echo "<script> console.log(\"Connexion échouée\")  </script>";
        }
    }
    
    
}


$smarty->display('Compte.tpl');
$smarty->display('footer.tpl');