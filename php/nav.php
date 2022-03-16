<?php
$page = $_SERVER['PHP_SELF'];
if (isset($_GET['deconnexion'])) {
    setcookie("connect_or_not");
    echo "<script> console.log(\"Deconnexion\") </script>";
    header("Refresh:0; url=$page");
}
?>
<body id="body">
    <header>
        <h1>
            <img class="erable" src="../images/erable.svg">
            <div class="titre">Acuponcture</div>
        </h1>

        <?php 
        if($page == '/index.php')
            { ?> 

        <nav>
            <a class="bandeau-courant" href="../index.php">Accueil</a>
            <a class="bandeau" href="/php/patho.php">Pathologies</a>
            <a class="bandeau" href="/php/contact.php">Contact</a>
            <a class="bandeau" href="/php/compte.php">Compte</a>
            
        <?php }
        elseif($page == '/php/patho.php')
            { ?>
        <nav>
            <a class="bandeau" href="../index.php">Accueil</a>
            <a class="bandeau-courant" href="patho.php">Pathologies</a>
            <a class="bandeau" href="contact.php">Contact</a>
            <a class="bandeau" href="compte.php">Compte</a>

        <?php }
        elseif($page == '/php/contact.php')
            { ?>
        <nav>
            <a class="bandeau" href="../index.php">Accueil</a>
            <a class="bandeau" href="patho.php">Pathologies</a>
            <a class="bandeau-courant" href="contact.php">Contact</a>
            <a class="bandeau" href="compte.php">Compte</a>
            
        <?php }
        elseif($page == '/php/compte.php')
            { ?>
        <nav>
            <a class="bandeau" href="../index.php">Accueil</a>
            <a class="bandeau" href="patho.php">Pathologies</a>
            <a class="bandeau" href="contact.php">Contact</a>
            <a class="bandeau-courant" href="compte.php">Compte</a>

        <?php  }
            if(!empty($_COOKIE["connect_or_not"]))
                {?>
                <a id="compte" href="<?php echo $_SERVER["REQUEST_URI"]."?deconnexion=true";?>"><i class="fas fa-user"></i></a>
            </nav>
            <?php }
            else {?>
                <div id="compte"><i class="fas fa-user-slash"></i></div>
                </nav>
        <?php } ?>

        <div id="barre-recherche">
            <?php
            if(!empty($_COOKIE["connect_or_not"]))
                {?>  
                <input id="barre" type="search" placeholder="Quels sont vos symptomes ?" name="terme">
                <img id ="loupe" src="../images/loupe.png"></i>

            <?php }
            else {?>
                <input id="barre" type="search" placeholder="Connectez-vous" name="terme" disabled>
                <img id ="loupe" src="../images/loupe.png"></i>
            <?php } ?>
        </div>

    </header> 
</body>

