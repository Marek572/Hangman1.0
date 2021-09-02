let newPhrase = "test"; //hasło
newPhrase = newPhrase.toUpperCase(); //kapitaliki
let phrase = document.getElementById("phrase"); //element z hasłem
let dashedPhrase = "";
let phraseLength = newPhrase.length; //długość hasła
let missAmount = 0;


// //tablica kategorii
// let categories = new Array(6);

// categories[0] = "Gry"
// categories[1] = "Marki Samochodów"
// categories[2] = "Rośliny"
// categories[3] = "Zwierzęta"
// categories[4] = "Filmy"
// categories[5] = "Wszystko"

// //tablica gier
// let games = new Array(20);

// games[0] = "League of Legends"
// games[1] = "World of Warcraft"
// games[2] = "Wiedźmin"
// games[3] = "Red Dead Redemption"
// games[4] = "Ori"
// games[5] = "Cuphead"
// games[6] = "Dead Cells"
// games[7] = "God of War"
// games[8] = "Hollow Knight"
// games[9] = "Ghost of tsushima"
// games[10] = "Ghostrunner"
// games[11] = "Speedrunners"
// games[12] = "Hades"
// games[13] = "The Last of Us"
// games[14] = "Half-Life"
// games[15] = "Dark Souls"
// games[16] = "Doom"
// games[17] = "Animal Crossing"
// games[18] = "Assassins Creed"
// games[19] = "Cyberpunk"

// // tablica samochodów
// let cars = new Array(20);

// cars[0] = "Audi"
// cars[1] = "BMW"
// cars[2] = "Citroen"
// cars[3] = "Dacia"
// cars[4] = "Fiat"
// cars[5] = "Ford"
// cars[6] = "Honda"
// cars[7] = "Hyudai"
// cars[8] = "Volvo"
// cars[9] = "Kia"
// cars[10] = "Mercedes"
// cars[11] = "Nissan"
// cars[12] = "Opel"
// cars[13] = "Peugeot"
// cars[14] = "Renault"
// cars[15] = "Seat"
// cars[16] = "Skoda"
// cars[17] = "Toyota"
// cars[18] = "Volkswagen"
// cars[19] = "Lexus"

// // tablica roślin
// let flora = new Array(20);

// flora[0] = "Tulipan"
// flora[1] = "Wanilia"
// flora[2] = "Róża"
// flora[3] = "Marchewka"
// flora[4] = "Seler"
// flora[5] = "Lawenda"
// flora[6] = "Irys"
// flora[7] = "Kaktus"
// flora[8] = "Stokrotka"
// flora[9] = "Koniczyna"
// flora[10] = "Jodła"
// flora[11] = "Świerk"
// flora[12] = "Aloes"
// flora[13] = "Storczyk"
// flora[14] = "Hortensja"
// flora[15] = "Bambus"
// flora[16] = "Chaber"
// flora[17] = "Babka zwyczjna"
// flora[18] = "Barszcz zwyczajny"
// flora[19] = "Dziurawiec zwyczajny"

// // tablica zwierząt
// let animals = new Array(20);

// animals[0] = "Ślimak"
// animals[1] = "Gołąb"
// animals[2] = "Mewa"
// animals[3] = "Lew"
// animals[4] = "Tygrys"
// animals[5] = "Wydra"
// animals[6] = "Zając"
// animals[7] = "Owca"
// animals[8] = "Niedźwiedź brunatny"
// animals[9] = "Panda"
// animals[10] = "Wilk"
// animals[11] = "Lis"
// animals[12] = "Królik"
// animals[13] = "Delfin"
// animals[14] = "Wieloryb"
// animals[15] = "Foka"
// animals[16] = "Pantera"
// animals[17] = "Żaba Wodna"
// animals[18] = "Tarantula"
// animals[19] = "Zaskroniec"

// // tablica filów
// let films = new Array(20);

// films[0] = "Skazani na Shawshank"
// films[1] = "Casablanca"
// films[2] = "Titanic"
// films[3] = "Forest Gump"
// films[4] = "Władca Pierścieni"
// films[5] = "Pulp Fiction"
// films[6] = "Bękarty wojny"
// films[7] = "Mad Max"
// films[8] = "Nietykalni"
// films[9] = "Zielona mila"
// films[10] = "Ojciec chrzestny"
// films[11] = "Dwunastu gniewnych"
// films[12] = "Lot nad kukułczym gniazdem"
// films[13] = "Joker"
// films[14] = "Incepcja"
// films[15] = "Django"
// films[16] = "Król Lew"
// films[17] = "Leon zawodowiec"
// films[18] = "Gladiator"
// films[19] = "Gwiezdne wojny"

// // tablica z wszystkim
// let combinedArrays = [games, cars, flora, animals, films]



//tablica liter
let letters = new Array(35);

letters[0] = "A"
letters[1] = "Ą"
letters[2] = "B"
letters[3] = "C"
letters[4] = "Ć"
letters[5] = "D"
letters[6] = "E"
letters[7] = "Ę"
letters[8] = "F"
letters[9] = "G"
letters[10] = "H"
letters[11] = "I"
letters[12] = "J"
letters[13] = "K"
letters[14] = "L"
letters[15] = "Ł"
letters[16] = "M"
letters[17] = "N"
letters[18] = "Ń"
letters[19] = "O"
letters[20] = "Ó"
letters[21] = "P"
letters[22] = "Q"
letters[23] = "R"
letters[24] = "S"
letters[25] = "Ś"
letters[26] = "T"
letters[27] = "U"
letters[28] = "V"
letters[29] = "W"
letters[30] = "X"
letters[31] = "Y"
letters[32] = "Z"
letters[33] = "Ź"
letters[34] = "Ż"

//stworzenie divów z kategoriami
// function createCategories(){
//     let divContent ="";

//     for(i=0;i<=5; i++){
//         let element = "category" + i;
//         divContent = divContent + '<div id="'+element+'" class="category" onclick="choseCategory('+i+')">'+categories[i]+'</div>';
//     }

//     document.getElementById("categories").innerHTML = divContent;

//     createLetters();
// }

//wybieranie kategorii
// function choseCategory(){

// }

//zamiana liter na kreski
function loadPhrase(){
    phrase.innerHTML = dashedPhrase;
}

for(i=0; i<phraseLength; i++){
    if(newPhrase[i]==" ") dashedPhrase = dashedPhrase + " ";
    else dashedPhrase = dashedPhrase + "-";
}

//stworzenie divów z literami
function createLetters(){
    let divContent ="";

    for(i=0;i<=34; i++){
        let element = "letter" + i;
        divContent = divContent + '<div id="'+element+'" class="letter" onclick="check('+i+')">'+letters[i]+'</div>';
    }

    document.getElementById("letters").innerHTML = divContent;

    loadPhrase();
}


//zamiana kliknietych liter z kresek
String.prototype.setChar = function(place, char){
    if(place>this.length - 1) return this.toString();
    else return this.substr(0, place) + char + this.substr(place+1);
}

//zgadywanie hasla
function check(num){
    let hit = false;

    for(i=0;i<phraseLength;i++){
        if(newPhrase[i]==letters[num]){
            dashedPhrase = dashedPhrase.setChar(i, letters[num]);
            hit = true;
        }
    }

    if(hit==true){
        let element = "letter" + num;

        document.getElementById(element).style.color = "hsl(77, 92%, 60%)";
        document.getElementById(element).style.borderColor = "hsl(77, 92%, 60%)";
        document.getElementById(element).style.cursor = "default";

        loadPhrase();
    }
    else{
        let element = "letter" + num;

        document.getElementById(element).style.color = "hsl(2, 71%, 55%)";
        document.getElementById(element).style.borderColor = "hsl(2, 71%, 55%)";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");

        //skucha
        missAmount++;
        let hangmanImg = "img/hangman"+missAmount+".png";
        document.getElementById("hangman").innerHTML = '<img src="'+hangmanImg+'"alt="" />';
    }

    //wygrana
    if(newPhrase == dashedPhrase){
        document.getElementById("letters").innerHTML = '<button id="reset" onclick="location.reload()">Jeszcze raz</button>'
        alert("Wygrałeś!\nHasło to: "+newPhrase);
    }

    //przegrana
    if(missAmount>=5){
        document.getElementById("letters").innerHTML = '<button id="reset" onclick="location.reload()">Jeszcze raz</button>'
        alert("Przegrałeś\nHasło to: "+newPhrase);
    }
}

window.onload = createLetters;