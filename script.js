let newPhrase = "Butelka wody";
let phrase = document.getElementById("phrase");
let dashedPhrase = "";
let phraseLength = newPhrase.length;

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



function loadPhrase(){
    phrase.innerHTML = dashedPhrase;
}

for(i=0; i<phraseLength; i++){
    if(newPhrase[i]==" ") dashedPhrase = dashedPhrase + " ";
    else dashedPhrase = dashedPhrase + "-"
}

function createLetters(){
    var divContent ="";

    for(i=0;i<=34; i++){
        divContent = divContent + '<div class="letter">'+letters[i]+'</div>';
    }

    document.getElementById("letters").innerHTML = divContent;

    loadPhrase();
}

window.onload = createLetters;