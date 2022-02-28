<!DOCTYPE html>
<html lang="fr">
    <head>
        <link rel="stylesheet" href="../css/panier.css">
    </head>

    <body id="body">
    <div class="result" id="result_rch_avance">
        <?php foreach ($queryResult as $each_result) { ?>
            <a href="#">
                <div class="patho">
                    <h4>Pathologie : <?= $each_result['pathologie']; ?></h4>
                    <p>Méridien : <?= $each_result['meridien']; ?></p>
                    <p>Symptome : <?= $each_result['symptome']; ?></p>
                </div>
            </a>
        <?php } ?>
    </div>
        <div class="panier">
            <h2>Pathologies : <i class="far fa-trash-alt"></i></h2>
            <div id="panier-voyage">
                <table>
                    <tr>
                        <td>Catégorie de pathologie</td>
                        <td>Caractéristiques possibles</td>
                        <td>Exemples</td>
                    </tr>
                    <tr>
                        <td>Pathologie de méridien</td>
                        <td>Interne - Externe</td>
                        <td>Méridien du poumon interne - du rein externe</td>
                    </tr>
                    <tr>
                        <td>Tendino-musculaire</td>
                        <td>Néant</td>
                        <td>Jing Jin du rein</td>
                    </tr>
                </table>
            </div>

        </div>
    </body>
</html>