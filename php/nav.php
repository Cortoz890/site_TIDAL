<head>
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="shortcut icon" type="image/x-icon" href="../favicon.ico">
    <meta charset="UTF-8">
    <title>Acuponcture</title>
</head>

<body id="body">
    <header>
        <h1>
            <img class="erable" src="../images/erable.svg">
            <div class="titre">Acuponcture</div>
        
        </h1>

        <nav>

        <a class="bandeau-courant" href="../index.php">Accueil</a>
        <a class="bandeau" href="patho.php">Pathologies</a>
        <a class="bandeau" href="contact.php">Contact</a>
        <a class="bandeau" href="compte.php">Compte</a>
        <div id="compte"><i class="fas fa-user-slash"></i></div>

        </nav>

        <div id="barre-recherche"> 
            <form id="barre-recherche">

            <?php
                if($connexion)
                {
                    echo '<script> console.log(\"Recherche en cours\") </script>';
            ?>      <input id="barre" type="search" placeholder="Quels sont vos symptômes?" name="terme">
            <?php
                }
                else
                {
            ?>   <input disabled="" id="barre" type="search" placeholder="Quels sont vos symptômes?" name="terme">
            <?php     
                }
            ?>    
                <input type="submit" id="btn_search" value="Rechercher" name="s">
                <img id ="loupe" src="../images/loupe.png   "></i>
            </form>
        </div>
    </header> 
</body>

