/* let affichage = document.getElementById("affichage");
let image = document.getElementsByClassName("image");
let overlay = document.getElementsByClassName("overlay");
var tri = document.getElementById('tri');
let barre = document.getElementById('barre');
let loupe = document.getElementById('loupe');
var prixmax = document.getElementById('prixmax');
let connexion = document.getElementById('connexion');
let mdp = document.getElementById('mdp');
let utilisateur = document.getElementById('nom-utilisateur');
let loginBox2 = document.getElementById('login-box2');
let compte = document.getElementById('compte');
let submitResa = document.getElementById('resa');
let panierVoyage = document.getElementById('panier-voyage');
let divPrix = document.getElementById('prixtot');
let delCheckbox = document.getElementsByClassName('del-checkbox');
let h2Ville = document.getElementById('h2-ville');
let sejour_id = new URLSearchParams(window.location.search).get("id");


class continent { // Définition d'une classe continent
    constructor(id, link, name) {
        this.id = id;
        this.link = link;
        this.name = name
    }
}

let Europe = new continent(0, 'images/Continent/Europe.jpeg', 'Europe');
let Asie = new continent(1, 'images/Continent/Asie.jpeg', 'Asie');
let AmeriqueN = new continent(2, 'images/Continent/AmériqueN.jpg', 'Amérique Du Nord');
let AmeriqueS = new continent(3, 'images/Continent/AmériqueS.jpeg', 'Amérique du Sud');
let Afrique = new continent(4, 'images/Continent/Afrique.jpeg', 'Afrique');
let IlesP = new continent(5, 'images/Continent/IlesP.jpeg', 'Iles Paradisiaques');

let LstContinent = [Europe,Asie,AmeriqueN,AmeriqueS,Afrique,IlesP];

class ville{ // Définition d'une classe ville
    constructor(id,id_continent,id_croissant,id_décroissant,link,name,continent,prix,name_api,temp){
        this.id = id;
        this.id_continent = id_continent;
        this.id_croissant = id_croissant;
        this.id_décroissant = id_décroissant;
        this.link = link;
        this.name = name;
        this.continent = continent
        this.prix = prix;
        this.name_api = name_api;
        this.temp = temp;
    }
}

let Paris = new ville(0,0,8,22, 'images/Europe/Paris.jpg', 'Paris', 'Europe', 400, 'Paris');
let Barcelone = new ville(1,1,6,24, 'images/Europe/Barcelone.jpg', 'Barcelone', 'Europe', 370, 'Barcelone');
let Londres = new ville(2,2,7,23, 'images/Europe/Londres.jpg', 'Londres', 'Europe', 380, 'Londres');
let Rome = new ville(3,3,5,25, 'images/Europe/Rome.jpg', 'Rome', 'Europe', 360, 'Rome');
let Stockholm = new ville(4,4,0,30, 'images/Europe/Stockholm.jpg', 'Stockholm', 'Europe', 200, 'Stockholm');

let Bangkok = new ville(5,0,15,15, 'images/Asie/Bangkok.jpg', 'Bangkok', 'Asie', 500, 'Bangkok');
let Bombay = new ville(6,1,18,12, 'images/Asie/Bombay.jpg', 'Bombay', 'Asie', 550, 'Bombay');
let Hanoï = new ville(7,2,13,17, 'images/Asie/Hanoï.jpg', 'Hanoï', 'Asie', 475, 'Hanoï');
let HongKong = new ville(8,3,19,11, 'images/Asie/HongKong.jpg', 'Hong Kong', 'Asie', 570, 'Hong Kong');
let Pékin = new ville(9,4,17,13, 'images/Asie/Pékin.jpg', 'Pékin', 'Asie', 530, 'Pékin');
let Tokyo = new ville(10,5,20,10, 'images/Asie/Tokyo.jpg', 'Tokyo', 'Asie', 600, 'Tokyo');

let Cancun = new ville(11,0,11,19, 'images/AmériqueN/Cancun.jpg', 'Cancun', 'AmeriqueN', 450, 'Cancun');
let LosAngeles = new ville(12,1,21,9, 'images/AmériqueN/LosAngeles.jpg', 'Los Angeles', 'AmeriqueN', 700, 'Los Angeles');
let Miami = new ville(13,2,23,7, 'images/AmériqueN/Miami.jpg', 'Miami', 'AmeriqueN', 750, 'Miami');
let Montreal = new ville(14,3,16,14, 'images/AmériqueN/Montreal.jpg', 'Montreal', 'AmeriqueN', 500, 'Montreal');
let NewYork = new ville(15,4,22,8, 'images/AmériqueN/NewYork.jpeg', 'New York', 'AmeriqueN', 700, 'New York');

let BuenosAires = new ville(16,0,12,18, 'images/AmériqueS/BuenosAires.jpg', 'Buenos Aires', 'AmeriqueS', 470, 'Buenos Aires');
let LacTiticaca = new ville(17,1,1,29, 'images/AmériqueS/LacTiticaca.jpg', 'Lac Titicaca', 'AmeriqueS', 300, 'Puno');
let Lima = new ville(18,2,3,27, 'images/AmériqueS/Lima.jpg', 'Lima', 'AmeriqueS', 350, 'Lima');
let Rio = new ville(19,3,2,28, 'images/AmériqueS/Rio.jpeg', 'Rio de Janeiro', 'AmeriqueS', 320, 'Rio de Janeiro');

let CapeTown = new ville(20,0,4,26, 'images/Afrique/CapeTown.jpg', 'Cape Town', 'Afrique', 360, 'Cape Town');
let Casablanca = new ville(21,1,10,20, 'images/Afrique/Casablanca.jpeg', 'Casablanca', 'Afrique', 450, 'Casablanca');
let Dubai = new ville(22,2,28,2, 'images/Afrique/Dubai.jpg', 'Dubaï', 'Afrique', 900, 'Dubaï');
let LeCaire = new ville(23,3,14,16, 'images/Afrique/LeCaire.jpg', 'Le Caire', 'Afrique', 480, 'Le Caire');
let Marrakech = new ville(24,4,9,21, 'images/Afrique/Marrakesh.jpg', 'Marrakech', 'Afrique', 430, 'Marrakech');

let Auckland = new ville(25,0,24,6, 'images/IlesP/Auckland.jpg', 'Auckland', 'IlesP', 820, 'Auckland');
let Caraibes = new ville(26,1,29,1, 'images/IlesP/Caraibes.jpg', 'Caraïbes', 'IlesP', 920, 'Bridgetown');
let Hawai = new ville(27,2,25,5, 'images/IlesP/Hawai.jpg', 'Hawaï', 'IlesP', 850, 'Hawaï');
let Seychelles = new ville(28,3,26,4, 'images/IlesP/Seychelles.jpg', 'Seychelles', 'IlesP', 870, 'Seychelles');
let Singapour = new ville(29,4,30,0, 'images/IlesP/Singapour.jpg', 'Singapour', 'IlesP', 950, 'Singapour');
let Ubud = new ville(30,5,27,3, 'images/IlesP/Ubud.jpg', 'Ubud', 'IlesP', 880, 'Ubud');

let PrixCroissant =[Stockholm, LacTiticaca, Rio, Lima, CapeTown, Rome, Barcelone, Londres, Paris, Marrakech, Casablanca, Cancun, BuenosAires, Hanoï, LeCaire, Bangkok, Montreal, Pékin, Bombay, HongKong, Tokyo, LosAngeles, NewYork, Miami, Auckland, Hawai, Seychelles, Ubud, Dubai, Caraibes, Singapour];
let PrixDécroissant =[Singapour, Caraibes, Dubai, Ubud, Seychelles, Hawai, Auckland, Miami, NewYork, LosAngeles, Tokyo, HongKong, Bombay, Pékin, Montreal, Bangkok, LeCaire, Hanoï, BuenosAires, Cancun, Casablanca, Marrakech, Paris, Londres, Barcelone, Rome, CapeTown, Lima, Rio, LacTiticaca, Stockholm,];

let LstEurope = [Paris,Barcelone,Londres,Rome,Stockholm];
let LstAsie = [Bangkok,Bombay,Hanoï,HongKong,Pékin,Tokyo];
let LstAmeriqueN = [Cancun, LosAngeles, Miami,Montreal,NewYork];
let LstAmeriqueS = [BuenosAires,LacTiticaca,Lima,Rio];
let LstAfrique = [CapeTown,Casablanca,Dubai,LeCaire,Marrakech];
let LstIlesP = [Auckland,Caraibes,Hawai,Seychelles,Singapour,Ubud];

let LstVille = [Paris,Barcelone,Londres,Rome,Stockholm,Bangkok,Bombay,Hanoï,HongKong,Pékin,Tokyo,Cancun, LosAngeles, Miami,Montreal,NewYork,BuenosAires,LacTiticaca,Lima,Rio,CapeTown,Casablanca,Dubai,LeCaire,Marrakech,Auckland,Caraibes,Hawai,Seychelles,Singapour,Ubud];

function search(){ // Affiche la ville quand on tape le nom dans la search barre ou renvoie vers l'index.html si on est sur une autre page
    if (location.href.split('/').pop('/') ==='index.html'){
        for (var i of LstVille){
            if (barre.value == i.name){
                tri.value = 10;
                return affichage.innerHTML = '<div alt="image de '+i.name+'" class ="image" onmouseover="infosimg('+ 0 +','+ i.id +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+i.name+'<br>'+ i.temp +'°C</div></div>';
            }
        }
        alert("La destination n'est pas encore dans notre catalogue");
    }
    
    else {
        for (var i of LstVille){
            if (barre.value == i.name){
                window.location.assign('../index.html');
            }
        }
        alert("La destination n'est pas encore dans notre catalogue");
    }
}

barre.addEventListener('keyup',function(event){ // Effectue la fonction search lorsque l'utilisateur appuie sur entrée dans la search barre
    if (event.keyCode === 13) {
        loupe.click();
    }
})


function afficheimg() { // Affiche les images en fonction du trie
    let link = ''
    affichage.innerHTML = '';

    if (tri.value == '1'){
        for (var i of LstContinent) {
            link += '<div alt="image de '+i.name+'" class ="image" onmouseover="infosimg('+ i.id +','+ i.id +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'</div></div>';
        }
        affichage.innerHTML += link;
    }

    else if (tri.value == '2') {
        for (var i of PrixCroissant) {
            if (i.prix < prixmax.value){
                link += '<div alt="image de '+i.name+'" class ="image" onmouseover="infosimg('+ i.id_croissant +','+ i.id_croissant +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+i.name+'<br>'+ i.temp +'°C</div></div>';
            }
        }
        affichage.innerHTML += link;
    }

    else if (tri.value == '3') {
        var c = 0;
        for (var i of PrixDécroissant) {
            if (i.prix < prixmax.value){
                link += '<div alt="image de '+i.name+'" class ="image" onmouseover="infosimg('+ c +','+ i.id_décroissant +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+i.name+'<br>'+ i.temp +'°C</div></div>';
                c++;
            }
        }
        affichage.innerHTML += link;
    }

    else if (tri.value == '4'){
        var c = 0;
        for (var i of LstEurope) {
            if (i.prix < prixmax.value){
                link += '<div alt="image de '+i.name+'" class ="image" onmouseover="infosimg('+ c +','+ i.id_continent +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+i.name+'<br>'+ i.temp +'°C</div></div>';
                c++;
            }
        }
        affichage.innerHTML += link;
    }

    else if (tri.value == '5'){
        var c = 0;
        for (var i of LstAsie) {
            if (i.prix < prixmax.value){
                link += '<div alt="image de '+i.name+'" class ="image" onmouseover="infosimg('+ c +','+ i.id_continent +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'<br>'+ i.temp +'°C</div></div>';
                c++;
            }
        }
        affichage.innerHTML += link;
    }
    else if (tri.value == '6'){
        var c = 0;
        for (var i of LstAmeriqueN) {
            if (i.prix < prixmax.value){
                link += '<div alt="image de '+i.name+'" class ="image" onmouseover="infosimg('+ c +','+ i.id_continent +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'<br>'+ i.temp +'°C</div></div>';
                c++;
            }
        }
        affichage.innerHTML += link;
    }
    else if (tri.value == '7'){
        var c = 0;
        for (var i of LstAmeriqueS) {
            if (i.prix < prixmax.value){
                link += '<div alt="image de '+i.name+'" class ="image" onmouseover="infosimg('+ c +','+ i.id_continent +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'<br>'+ i.temp +'°C</div></div>';
                c++;
            }
        }
        affichage.innerHTML += link;
    }
    else if (tri.value == '8'){
        var c = 0;
        for (var i of LstAfrique) {
            if (i.prix < prixmax.value){
                link += '<div alt="image de '+i.name+'" class ="image" onmouseover="infosimg('+ c +','+ i.id_continent +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'<br>'+ i.temp +'°C</div></div>';
                c++;
            }
        }
        affichage.innerHTML += link;
    }
    else if (tri.value == '9'){
        var c = 0;
        for (var i of LstIlesP) {
            if (i.prix < prixmax.value){
                link += '<div alt="image de '+i.name+'" class ="image" onmouseover="infosimg('+ c +','+ i.id_continent +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'<br>'+ i.temp +'°C</div></div>';
                c++;
            }
        }
        affichage.innerHTML += link;
    }
}

function infosimg(i,h) { // Onmouseover de l'image, zoom sur celle-ci et fait apparaitre l'overlay
    image[i].style.width = "370px";
    image[i].style.height = "267px";
    image[i].style.marginTop = "0px";
    image[i].style.marginBottom = "0px";

    overlay[i].style.backgroundColor = "rgba(0,0,0,0.7)";
    overlay[i].style.color = "rgba(255, 255, 255,1)" ;
    overlay[i].style.height = "30%" ;

    image[i].setAttribute('onmouseout', 'delimg(' + i + ')');
    image[i].setAttribute('onclick', 'resa(' + h + ')');
}

function delimg(i) { // Onmouseout de l'image, retire le zoom et l'overlay
    image[i].style.width = "350px";
    image[i].style.height = "237px";
    image[i].style.marginTop = "10px";
    image[i].style.marginBottom = "20px";

    
    overlay[i].style.backgroundColor = "rgba(0,0,0,0)";
    overlay[i].style.height = "0%" ;
    overlay[i].style.color = "rgba(255, 255, 255,0)" ;
}

function resa(h) { // Affiche la page de réservation selon l'id de l'image sur laquel on a cliqué
    if (tri.value == '1'){
        for (var i=0 ; i<6 ; i++){
            if (h === i){
                tri.value = i+4;
                afficheimg();
            }
        }
    }
    else if (tri.value == '2'){
        var id = PrixCroissant[h].id;
        var lien = 'html/Résa.html?id=' + id;
        window.location.assign(lien);
    }

    else if (tri.value == '3'){
        var id = PrixDécroissant[h].id;
        var lien = 'html/Résa.html?id=' + id;
        window.location.assign(lien);
    }

    else if (tri.value == '4'){
        var id = LstEurope[h].id;
        var lien = 'html/Résa.html?id=' + id;
        window.location.assign(lien);
    }

    else if (tri.value == '5'){
        var id = LstAsie[h].id;
        var lien = 'html/Résa.html?id=' + id;
        window.location.assign(lien);
    }

    else if (tri.value == '6'){
        var id = LstAmeriqueN[h].id;
        var lien = 'html/Résa.html?id=' + id;
        window.location.assign(lien);
    }

    else if (tri.value == '7'){
        var id = LstAmeriqueS[h].id;
        var lien = 'html/Résa.html?id=' + id;
        window.location.assign(lien);
    }

    else if (tri.value == '8'){
        var id = LstAfrique[h].id;
        var lien = 'html/Résa.html?id=' + id;
        window.location.assign(lien);
    }

    else if (tri.value == '9'){
        var id = LstIlesP[h].id;
        var lien = 'html/Résa.html?id=' + id;
        window.location.assign(lien);
    }

    else if (tri.value == '10'){
        var lien = 'html/Résa.html?id=' + h;
        window.location.assign(lien);
    }
}

function affichetemp() { // Affiche la température de la ville avec l'API OnpenWeathermap
    for (let i of LstVille) {
    	fetch('https://api.openweathermap.org/data/2.5/weather?q='+i.name_api+'&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
    	.then(res => res.json())
    	.then(data => {
    		var temp = Math.round(data.main.temp);
            i.temp = temp;
            afficheimg();
        })
    }
}

function connexionload(){ // Cherche dans le localstorage si le compte a été créé, si oui il se connect
    connexion.addEventListener('submit', function(event){
        let user = document.getElementById('nom-utilisateur').value;
        let mdp = document.getElementById('mdp').value;
        event.preventDefault();
        for (var i = 0 ; i<localStorage.length ; i++){
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            if (user == value){
                if(mdp == localStorage.getItem('mdp'+key[4])){
                    connect();
                    return 
                }
            }
        }
        alert("Ce compte n'existe pas");
    })
}


   
function connect(){ // Renvoie un message pour signifier que l'utilisateur est connecté
    alert("Vous êtes connecté");
    localStorage.setItem('co', true);
    location.reload();
}

function EstConnecté(){ // Vérifie sur chaque page que l'utilisateur est connecté (logo de connexion non barré)
    if (localStorage.getItem('co') === 'true'){
        compte.innerHTML = '<i class="fas fa-user"></i>';
    }
}

function deconnection(){ // Déconnection (logo de connexion barré)
    localStorage.setItem('co', false);
    compte.innerHTML = '<i class="fas fa-user"></i>';
    alert("Vous êtes deconnecté");
    location.reload();
}

function creacompte(){ // Affiche le form de création du compte et met les mdp et nom d'utilisateur dans le local storage si quelqu'un s'inscrit
    loginBox2.innerHTML = '<form id="connexion2"><h2>Création compte</h2><div class="textbox"><i class="fas fa-user"></i><input id="nom-utilisateur2" type="text" placeholder="Nom utilisateur" required></div><div class="textbox"><i class="fas fa-envelope"></i><input id="email" type="email" placeholder="E-mail" required></div><div class="textbox"><i class="fas fa-lock"></i><input id="mdp20" type="password" placeholder="Mot de passe" required></div><div class="textbox"><i class="fas fa-lock"></i><input id="mdp21" type="password" placeholder="Confirmation mot de passe" required></div><input type="submit" id="btn" value="Créer"><input type="button" id="btn2" value="Se connecter" onclick="location.reload()"></form>';
    connexion2.addEventListener('submit', function(event){
        event.preventDefault();
        let nbr_compte = 0;
        let mdp20 = document.getElementById('mdp20').value;
        let mdp21 = document.getElementById('mdp21').value;
        let user = document.getElementById('nom-utilisateur2').value;
        if (mdp20 !== mdp21 ){
            alert("Les mots de passes doivent être identique");
        }
        else{
            for (i=0 ; i<10;i++){
                 if (localStorage.getItem('0') == i){
                    nbr_compte = i+1;
                 }
            }
            localStorage.setItem('0', nbr_compte);
            localStorage.setItem('user'+nbr_compte, user);
            localStorage.setItem('mdp'+nbr_compte, mdp20);
            location.reload();
        }
    })
}

function NomVille(){ // Affiche le nom de la ville en fonction de son id sur la page de réservation
    let name = LstVille[sejour_id].name;
    h2Ville.innerHTML = name;
}

function CalculPrixBase() { // Récupère le prix de base de la ville en fonction de l'id sur la page de réservation
    var PrixBase = LstVille[sejour_id].prix;
    return PrixBase
}

function dureeSejour() { // Récupère la durée du séjour en fonction des dates séléctionnées
    var datedepart = new Date(document.getElementById("date_depart").value);
    var dateretour = new Date(document.getElementById("date_retour").value);
    date = parseInt((dateretour - datedepart)/(86400000));
    return date
}

function DateVerif() { // Vérification des dates entrées par l'utilisateur et renvoie un message d'alerte
    var datejour = new Date();
    var datedepart = new Date(document.getElementById("date_depart").value);
    var dateretour = new Date(document.getElementById("date_retour").value);
    if (dateretour < datedepart){
        date_retour.value = "";
        alert("Veuillez rentrer une date de retour postérieur à la date de départ");
        return 
    }
    if (datedepart < datejour){
        date_depart.value = "";
        alert("Veuillez rentrer une date postérieur à aujourd'hui");
        return
    }
    if (dateretour < datejour){
        date_retour.value = "";
        alert("Veuillez rentrer une date postérieur à aujourd'hui");
        return
    }
}

function prixEnfants(){ // Calcul le prix enfant 
    var prixEnfants = 0.4*CalculPrixBase()*dureeSejour()*document.getElementById("nb_enfants").value;
    return prixEnfants
}

function prixAdultes() { // Calcul le prix adulte
    var prixAdultes = dureeSejour()*CalculPrixBase()*document.getElementById("nb_adultes").value;
    return prixAdultes
}

function petitDej(){ // Calcul le prix du petit déjeuner par personne et par jour
    var checkbox = document.getElementById("dej_checkbox");
    var dej = 0;
    if (checkbox.checked == true){
        dej = 12*(parseInt(document.getElementById("nb_adultes").value) + parseInt(document.getElementById("nb_enfants").value))*dureeSejour();
    }
    return dej
}

function prixTotal(){ // Calcul le prix total du séjour et l'affiche dynamiquement
    var prixTotal = prixEnfants() + prixAdultes() + petitDej();
    if (prixTotal > 1){
        document.getElementById("prix_voyage").innerHTML = prixTotal;
    }
}

function annulation(){ // Remise à zéro du formulaire
    document.getElementById("resa").reset();
    location.reload();
}

function submitR(){ // Met les données du form en localstorage sous forme de liste et renvoie vers le panier
    submitResa.addEventListener('submit', function(event){
        event.preventDefault();
        let ville = LstVille[sejour_id].name;
        let datedepart = new Date(document.getElementById("date_depart").value);
        let jourD = datedepart.getDate();
        let moisD = datedepart.getMonth()+1;
        let annéeD = datedepart.getFullYear();
        let dateretour = new Date(document.getElementById("date_retour").value);
        let jourR = dateretour.getDate();
        let moisR = dateretour.getMonth()+1;
        let annéeR = dateretour.getFullYear();
        let prix = document.getElementById("prix_voyage").textContent || document.getElementById("prix_voyage").innerText
        let numéro = getRandomInt(1000,9999);

        let LstInfo = [ville, jourD, moisD, annéeD ,jourR, moisR, annéeR, prix, numéro, sejour_id];
        let lien = 'Panier.html';
        let nbr_voyage = 0;

        for (i=0 ; i<30;i++){
            if (localStorage.getItem('1') == i){
               nbr_voyage = i+1;
            }
        }
        localStorage.setItem('1', nbr_voyage);
        localStorage.setItem('voyage'+nbr_voyage, LstInfo);
        window.location.assign(lien);
    })

}

function getRandomInt(min,max) { // Numéro de voyage aléatoire
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function panier(){ // Affiche les différents voyages du panier si il y en a en les récupérant dans le local storage
    var affichepanier = '';
    var prixtot = 0;
    for (var i=0;i<30;i++){
        if (typeof localStorage.getItem('voyage'+i) == 'string'){
            var LstInfo = localStorage.getItem('voyage'+i).split(',');
            var ville = LstInfo[0];
            var jourD = LstInfo[1];
            var moisD = LstInfo[2];
            var annéeD = LstInfo[3];
            var jourR = LstInfo[4];
            var moisR = LstInfo[5];
            var annéeR = LstInfo[6];
            var prix = LstInfo[7];
            var numéro = LstInfo[8];
            var id = LstInfo[9];
            prixtot += parseInt(prix);
            if (jourD<10){
                var jourD = 0+jourD;
            }
            if (moisD<10){
                var moisD = 0+moisD;
            }
        
            if (jourR<10){
                var jourR = 0+jourR;
            }
            if (moisR<10){
                var moisR = 0+moisR;
            }
            affichepanier += '<div class="voyage" onclick="modif('+id+','+i+')"><div class ="nom-ville">'+ ville +'</div><div class="dateD">du : '+'<input class="date" type="date" value="'+annéeD+'-'+moisD+'-'+ jourD +'" disabled></div>'+'<div class="dateR">au :  '+'<input  class="date" type="date" value="'+annéeR+'-'+moisR+'-'+ jourR +'" disabled></div><div class="prix">Prix : '+prix+' €</div>'+'<div class="numéro-résa">n°: '+numéro+'</div></div><input type="checkbox" class="del-checkbox" name="del" onchange="del()" value="'+i+'" aria-checked="false">';
        }  
    }
    panierVoyage.innerHTML += affichepanier;
    divPrix.innerHTML = 'Prix Total : '+prixtot + ' €';
}

function modif(i,h){ // Permet de modifier la réservation lorsque l'utilisateur est dans le panier en cliquant sur le voyage
    var index = h;
    localStorage.removeItem('voyage'+index);
    var id = i;
    var lien = 'Résa.html?id='+id;
    window.location.assign(lien);
}

function del(){ // Permet de supprimer le voyage dans le panier
    for (var i=0;i<30;i++){
        if (delCheckbox[i] != null){
            if (delCheckbox[i].checked === true){
                let index = delCheckbox[i].value;
                localStorage.removeItem('voyage'+index);
                location.reload();
            }
        }
    }    
}
 */