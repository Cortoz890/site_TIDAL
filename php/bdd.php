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
?>
<div class="container">
<div class="affichage">
<?php

$sql = "SELECT t1.nom as meridien, t4.desc2 as symptome, t2.desc as pathologie FROM public.meridien t1 
INNER JOIN public.patho t2  ON t1.code = t2.mer INNER JOIN public.symptPatho t3 ON t2.idP = t3.idP 
INNER JOIN public.symptome t4 ON t3.idS=t4.idS INNER JOIN public.keySympt t5 ON t4.idS=t5.idS 
INNER JOIN public.keywords t6 ON t5.idK=t6.idK";

$dbh->beginTransaction();
$pathos_meridiens = $dbh->prepare($sql);
$pathos_meridiens->execute();
$pathos_meridiens_data = $pathos_meridiens->fetchAll();
$dbh->commit();

foreach ($pathos_meridiens_data as $nom_meridien) {
    ?>
        <div class="patho">
            <h4><?= $nom_meridien['pathologie']; ?></h4>
            <p>Méridien : <?= $nom_meridien['meridien']; ?></p>
            <p>Symptome : <?= $nom_meridien['symptome']; ?></p>
        </div>
<?php
}
?>
</div>
</div>