let newPhrase = "ABC"; //hasło
newPhrase = newPhrase.toUpperCase(); //kapitaliki
let phrase = document.getElementById("phrase"); //element z hasłem
let dashedPhrase = "";
let phraseLength = newPhrase.length; //długość hasła
let missAmount = 0;


//tablica kategorii
let categories = ["Gry","Marki Samochodów","Rośliny","Zwierzęta","Filmy","Wszystko"];

//tablica gier
let games = ["League of Legends","World of Warcraft","Wiedźmin","Red Dead Redemption","Ori","Cuphead","Dead Cells","God of War","Hollow Knight","Ghost of tsushima","Ghostrunner","Speedrunners","The Last of Us","Half-Life","Dark Souls","Doom","Animal Crossing","Assassins Creed","Cyberpunk"];

// tablica samochodów
let cars = ["Audi","BMW","Citroen","Dacia","Fiat","Ford","Honda","Hyudai","Volvo","Kia","Mercedes","Nissan","Opel","Peugeot","Renault","Seat","Skoda","Toyota","Volkswagen","Lexus"];

// tablica roślin
let flora = ["Tulipan","Wanilia","Róża","Marchewka","Seler","Lawenda","Irys","Kaktus","Stokrotka","Koniczyna","Jodła","Świerk","Aloes","Storczyk","Hortensja","Bambus","Chaber","Babka zwyczjna","Barszcz zwyczajny","Dziurawiec zwyczajny"];

// // tablica zwierząt
let animals = ["Ślimak","Gołąb","Mewa","Lew","Tygrys","Wydra","Zając","Owca","Niedźwiedź brunatny","Panda","Wilk","Lis","Królik","Delfin","Wieloryb","Foka","Pantera","Żaba Wodna","Tarantula","Zaskroniec"];

// tablica filów
let films = ["Skazani na Shawshank","Casablanca","Titanic","Forest Gump","Władca Pierścieni","Pulp Fiction","Bękarty wojny","Mad Max","Nietykalni","Zielona mila","Ojciec chrzestny","Dwunastu gniewnych","Lot nad kukułczym gniazdem","Joker","Incepcja","Django","Król Lew","Leon zawodowiec","Gladiator","Gwiezdne wojny"];

// // tablica z wszystkim
// let combinedArrays = [games, cars, flora, animals, films]

//tablica liter
let letters = ["A","Ą","B","C","Ć","D","E","Ę","F","G","H","I","J","K","L","Ł","M","N","Ń","O","Ó","P","Q","R","S","Ś","T","U","V","W","X","Y","Z","Ź","Ż"];


//stworzenie divów z kategoriami
function createCategories(){
    let divContent ="";

    for(i=0;i<=5; i++){
        let element = "category" + i;
        divContent = divContent + '<div id="'+element+'" class="category" value="'+element+'" onclick="choseCategory(this.value)">'+categories[i]+'</div>';
    }

    document.getElementById("categories").innerHTML = divContent;

    createLetters();
}

// wybieranie kategorii
function choseCategory(category){
    switch(category){
        case "category0":
            newPhrase = games[Math.floor(Math.random()*games.length)];
            break
        case "category1":
            newPhrase = cars[Math.floor(Math.random()*cars.length)];
            break
        case "category2":
            newPhrase = cars[Math.floor(Math.random()*cars.length)];
            break
        case "category3":
            newPhrase = cars[Math.floor(Math.random()*cars.length)];
            break
        case "category4":
            newPhrase = cars[Math.floor(Math.random()*cars.length)];
            break
        case "category5":
            newPhrase = "test"
            break
        
    }
}

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

window.onload = createCategories;