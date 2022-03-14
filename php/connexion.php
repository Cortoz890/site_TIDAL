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

if (isset($_GET['submit'])){
    $user_form = $_GET['user'];
    $pass_form = $_GET['pass'];
    foreach ($comptes as $compte)
    {
        if($compte['username'] == $user_form && $compte['pass'] == $pass_form)
        {
            $connexion = $compte['username'];
            setcookie("connect_or_not", $connexion, time() + (60*60), "/");
            header("Refresh:0; url=../index.php");
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

$sql2 = 'SELECT * FROM keywords';
$sth2 = $dbh->prepare($sql2);
$sth2->execute();
$sympt = $sth2->fetchAll();

$sql3 = 'SELECT * FROM keysympt';
$sth3 = $dbh->prepare($sql3);
$sth3->execute();
$sympt_idk = $sth3->fetchAll();

$sql4 = 'SELECT * FROM symptome';
$sth4 = $dbh->prepare($sql4);
$sth4->execute();
$sympt_ids = $sth4->fetchAll();

$sql5 = 'SELECT * FROM symptpatho';
$sth5 = $dbh->prepare($sql5);
$sth5->execute();
$sympt_idp = $sth5->fetchAll();

$sql6 = 'SELECT * FROM patho';
$sth6 = $dbh->prepare($sql6);
$sth6->execute();
$sympt_desc = $sth6->fetchAll();

$sql7 = 'SELECT * FROM meridien';
$sth7 = $dbh->prepare($sql7);
$sth7->execute();
$sympt_mer = $sth7->fetchAll();

$recherche = false;

if(isset($_GET["s"])){
    $research = $_GET['terme'];
    $recherche = true;
    echo "<script> console.log(\"Recherche de $research en cours\") </script>";        
    foreach ($sympt as $symptome){
        if($symptome['name'] == $research){
            ?>
            <p>Le symptome est : <?= $research; ?></p>
            <?php
            foreach ($sympt_idk as $idk){
                if ($idk['idk'] == $symptome['idk']){
                    foreach ($sympt_ids as $ids){
                        if ($ids['ids'] == $idk['ids']){
                            ?>
                            <p>La description du symptome est : <?= $ids['desc']; ?></p>
                            <?php
                            foreach ($sympt_idp as $idp){
                                if ($idp['ids'] == $ids['ids']){
                                    foreach ($sympt_desc as $desc){
                                        if ($desc['idp'] == $idp['idp']){
                                            ?>
                                            <p>La description de la pathologie est : <?= $desc['desc']; ?></p>
                                            <?php
                                            foreach ($sympt_mer as $mer){
                                                if ($mer['code'] == $desc['mer']){
                                                    ?>
                                                    <p>Le meridien est : <?= $mer['nom']; ?></p>
                                                    <?php
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

if(!empty($_COOKIE["connect_or_not"]))
    {
        echo "<script> console.log(\"Connexion réussie \") </script>";
    }

else
{
    echo "<script> console.log(\"Connexion échouée \") </script>";
}