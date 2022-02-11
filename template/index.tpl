<!DOCTYPE html>
<html lang="fr">
<head>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
    <meta charset="UTF-8">
    <title>Acuponcture</title>
</head>

    <body id="body">
        <header>
            <h1>
                <img class="erable" src="images/erable.svg">
                <div class="titre">Acuponcture</div>
            
            </h1>

            <nav>

            <a class="bandeau-courant" href="index.php">Accueil</a>
            <a class="bandeau" href="php/patho.php">Pathologies</a>
            <a class="bandeau" href="php/contact.php">Contact</a>
            <a class="bandeau" href="php/compte.php">Compte</a>
            <div id="compte"><i class="fas fa-user-slash"></i></div>

            </nav>

            <div id="barre-recherche"> 
                <input id="barre" type="search" placeholder="Quels sont vos symptômes?">
                <img id ="loupe" src="../images/loupe.png"></i>
            </div>



        </header>
        

            <div id=container> 

                <div class="filtre">
                    <select  id="tri">

                        <option value="1">Par Continents</option>

                    </select>
                </div>
                <div class="filtre">
                    <select  id="prixmax">

                        <option value="1000">Max : 1000€ / Personne</option>

                    </select>

                </div>

                <div>
                    Hello {$name} smarty


                </div>

            </div>

    </body>
</html>