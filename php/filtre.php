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

$sql = "SELECT t1.nom as meridien FROM public.meridien t1";

$dbh->beginTransaction();
$pathos_meridiens = $dbh->prepare($sql);
$pathos_meridiens->execute();
$pathos_meridiens_data = $pathos_meridiens->fetchAll();
$dbh->commit();

?>
<form class="filtre" method="post">
    <select name='select_meridien' id="tri">
        <?php
        foreach ($pathos_meridiens_data as $nom_meridien) {
            ?>
            <option value="<?= $nom_meridien['meridien']; ?>" id="meridien-option"> <?= $nom_meridien['meridien']; ?> </option>
        <?php
        }
        ?>
    </select>

    <select name='select_patho' id="tri">
        <option value="méridien" id="patho-option"> Méridien</option>
        <option value="organe/viscère" id="patho-option">Organe/viscère</option>
        <option value="luo" id="patho-option">Luo</option>
        <option value="merveilleux" id="patho-option">Merveilleux</option>
        <option value="vaisseaux" id="patho-option">Vaisseaux</option>
        <option value="jing jin" id="patho-option">Jing jin</option>
    </select>

    <select name='select_caract' id="tri">
        <option value="plein" id="Carac-option">Plein</option>
        <option value="chaud" id="Carac-option">Chaud</option>
        <option value="vide" id="Carac-option">Vide</option>
        <option value="froid" id="Carac-option">Froid</option>
        <option value="interne" id="Carac-option">Interne</option>
        <option value="externe" id="Carac-option">Externe</option>
    </select>
    <input type="submit" value="Submit the form"/>
</form>
<div class="container">
<div class="affichage">
<?php
if (isset($_POST['select_meridien']) && isset($_POST['select_patho']) && isset($_POST['select_caract'])){
    $meridien = $_POST['select_meridien'];
    $patho = $_POST['select_patho'];
    $caract = $_POST['select_caract'];
    $sql = "SELECT * FROM public.meridien t1 INNER JOIN public.patho t2  ON t1.code = t2.mer 
    INNER JOIN public.symptPatho t3 ON t2.idP = t3.idP 
    INNER JOIN public.symptome t4 ON t3.idS=t4.idS WHERE t1.nom='$meridien' AND t2.desc LIKE '%$patho%' AND t2.desc LIKE '%$caract%'";
    $dbh->beginTransaction();
    $pathos_meridiens = $dbh->prepare($sql);
    $pathos_meridiens->execute();
    $pathos_meridiens_data = $pathos_meridiens->fetchAll();
    $dbh->commit();
    foreach ($pathos_meridiens_data as $nom_meridien) {
    ?>
        <div class="patho">
            <h4>Pathologie : <?= $nom_meridien['desc']; ?></h4>
            <p>Méridien : <?= $nom_meridien['nom']; ?></p>
            <p>Symptome : <?= $nom_meridien['desc2']; ?></p>
        </div>
<?php
}}?>
</div>
</div>
