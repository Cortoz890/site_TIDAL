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
                <a class="bandeau-courant" href="#">Accueil</a>
                <a class="bandeau" href="html/Patho.html">Pathologies</a>
                <a class="bandeau" href="html/Contact.html">Contact</a>
                <a class="bandeau" href="html/Compte.html">Compte</a>
                <div id="compte"><i class="fas fa-user-slash"></i></div>

            </nav>

            <div id="barre-recherche"> 
                <input id="barre" type="search" placeholder="Quels sont vos symptômes?">
                <img id ="loupe" src="images/loupe.png"></i>
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

        <footer>
            <div class="text-footer">© 2022 Acuponcture, Inc.</div>
            <div class="text-footer">Conditions d’utilisation</div>
            <div class="text-footer">Politique de confidentialité</div>
            <div class="text-footer">Mentions légales</div>
            <a href="#" class="bulle-1"><img class="logo" src="images/fb.svg"></a>
            <a href="#" class="bulle"><img class="logo" src="images/insta.svg"></a>
            <a href="#" class="bulle"><img class="logot" src="images/tw.png"></a>
            <a href="#" class="bulle"><img class="logo" src="images/yt.svg"></a>
            <a href="#" class="bulle-in" ><img class="logo-in" src="images/IN.png"></a>
        </footer>

        <a class="gotopbtn" href="#" ><img class="logo" src="images/scroll.svg"></a>

    </body>
</html>