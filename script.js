let newPhrase = "Zegarek"; //hasło
newPhrase = newPhrase.toUpperCase(); //kapitaliki
let phrase = document.getElementById("phrase"); //element z hasłem
let dashedPhrase = "";
let phraseLength = newPhrase.length; //długość hasła
let missAmount = 0;


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


//zamiana liter na kreski
function loadPhrase(){
    phrase.innerHTML = dashedPhrase;
}

for(i=0; i<phraseLength; i++){
    if(newPhrase[i]==" ") dashedPhrase = dashedPhrase + " ";
    else dashedPhrase = dashedPhrase + "-";
}

function createLetters(){
    var divContent ="";

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
        alert("Brawo! Wygrałeś!\nHasło to: "+newPhrase);
    }

    //przegrana
    if(missAmount>=5){
        document.getElementById("letters").innerHTML = '<button id="reset" onclick="location.reload()">Jeszcze raz</button>'
        alert("Przegrałeś\nHasło to: "+newPhrase);
    }
}

window.onload = createLetters;