<?php
require_once('../smarty/libs/Smarty.class.php');

$smarty = new Smarty();
$smarty->setTemplateDir('/var/www/html/template');
$smarty->setCompileDir('/var/www/html/template_c');
$smarty->setConfigDir('/var/www/html/configs');
$smarty->setCacheDir('/var/www/html/cache');


$serveur_bd = 'localhost';
$nom_bd = 'acudb';
$utilisateur_bd = 'pgtidal';
$passe_bd= 'tidal';
$source_bd = "pgsql:host=$serveur_bd;port=5432;dbname=$nom_bd;user=$utilisateur_bd;password=$passe_bd";

try{
    $dbh = new PDO($source_bd);
}catch (PDOException $e){ // Génération d'une exception PHP PDO PostgreSQL
    echo $e->getCode() . ' ' . $e->getMessage();
}

$sql = 'SELECT * FROM users ';
$sth = $dbh->prepare($sql);
$sth->execute();
$comptes = $sth->fetchAll();

$smarty->assign('connexion', false);
$smarty->assign('test', "UwU");

if (isset($_GET['submit'])){
    $user_form = $_GET['user'];
    $pass_form = $_GET['pass'];
    
    foreach ($comptes as $compte)
    {
        if($compte['username'] == $user_form && $compte['pass'] == $pass_form)
        {
            $connexion = true;
        }
    }

}

if($connexion)
{
    echo "<script> console.log(\"Connexion réussie\") </script>";
}

else
{
    echo "<script> console.log(\"Connexion échouée\") </script>";
}

require("nav.php");
$smarty->display('Compte.tpl');
$smarty->display('footer.tpl');
