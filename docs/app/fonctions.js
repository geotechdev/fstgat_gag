var input = prompt("Saisissez un mot à analyser:");

console.log("Le mot \"" + input + "\" contient " + input.length + " caractère(s).");
console.log("Il s'écrit en minuscules \"" + input.toLowerCase() + "\".");
console.log("Il s'écrit en majuscules \"" + input.toUpperCase() + "\".");

function compterNbVoyelles(input) {
    "use strict";
    var nbVoyelles = 0;
    for (var i = 0; i < input.length; i++) {
        var lettre = input[i].toLowerCase();
        if ((lettre === "i") || (lettre === "a") || (lettre === "e") || (lettre === "u") || (lettre === "o")) {
            nbVoyelles++;
        }
    }
    return nbVoyelles;
}

function compterNbConsonnes(input) {
    "use strict";
    var nbConsonnes = 0;
    for (var i = 0; i < input.length; i++) {
        var lettre = input[i].toLowerCase();
        if ((lettre !== "i") && (lettre !== "a") && (lettre !== "e") && (lettre !== "u") && (lettre !== "o")) {
            nbConsonnes++;
        }
    }
    return nbConsonnes;
}

console.log("Il contient " + compterNbVoyelles(input) + " voyelles et " + compterNbConsonnes(input) + " consonnes.");

function inverser(input) {
    "use strict";
    var inverse = "";
    for (var i = 0; i < input.length; i++) {
        inverse = input[i] + inverse;
    }
    return inverse;
}

console.log("Il s'écrit à l'envers comme ça: " + inverser(input));

if (input.toLowerCase() === inverser(input).toLowerCase()) {
    console.log("C'est un palindrome.");
} else {
    console.log("Ce n'est pas un palindrome.");
}

function trouverLeetSpeak(input) {
    var inputLeet = input;
    switch (input.toLowerCase()) {
        case "a":
            inputLeet = "4";
            break;
        case "b":
            inputLeet = "8";
            break;
        case "e":
            inputLeet = "3";
            break;
        case "l":
            inputLeet = "1";
            break;
        case "o":
            inputLeet = "0";
            break;
        case "s":
            inputLeet = "5";
            break;
        case "t":
            inputLeet = "7";
            break;
    }
    return inputLeet;
}

function convertirEnLeetSpeak(input) {
    var leet = "";
    for (var i = 0; i < input.length; i++) {
        leet = leet + trouverLeetSpeak(input[i]);
    }
    return leet;
}

console.log("Il s'écrit en leet speak comme ça: " + convertirEnLeetSpeak(input) + ".\n");