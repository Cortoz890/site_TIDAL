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
$sql = 'ALTER TABLE symptome RENAME COLUMN "desc" TO desc2';
$dbh->exec($sql);

$sql = "SELECT * FROM public.meridien t1 INNER JOIN public.patho t2  ON t1.code = t2.mer 
        INNER JOIN public.symptPatho t3 ON t2.idP = t3.idP 
        INNER JOIN public.symptome t4 ON t3.idS=t4.idS 
        INNER JOIN public.keySympt t5 ON t4.idS=t5.idS 
        INNER JOIN public.keywords t6 ON t5.idK=t6.idK";

$dbh->beginTransaction();
$pathos_meridiens = $dbh->prepare($sql);
$pathos_meridiens->execute();
$datas = $pathos_meridiens->fetchAll();
$dbh->commit();

if (isset($_POST['terme']) && $_SERVER['PHP_SELF'] != "/php/patho.php" ) {
    $research=$_POST['terme'];
    header("Refresh:0; url=/php/patho.php?terme=$research");
}

if ( isset($_POST['terme']) && $_SERVER['PHP_SELF'] = "/php/patho.php" or (isset($_GET['terme'])) ) {
    if (isset($_GET['terme'])){
        $research=$_GET['terme'];
    }
    else {
        $research=$_POST['terme'];
    }

?>
    <div class="container">
    <div class="affichage">
<?php
    echo "<script> console.log(\"Recherche de $research en cours\") </script>";
    foreach ($datas as $data){
        if ($data['name'] == $research){?>
            <div class="patho">
                <h4>Pathologie : <?= $data['desc']; ?></h4>
                <p>Méridien : <?= $data['nom']; ?></p>
                <p>Symptome : <?= $data['desc2']; ?></p>
            </div>
    
<?php
}}?>
</div>
</div>
<?php
}

