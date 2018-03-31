// array 
var mousquetaires = ["Athos", "Porthos", "Aramis"];
for (var i = 0; i < mousquetaires.length; i++) {
    console.log(mousquetaires[i]);
}
mousquetaires.push("Artagnan");
console.log("Après le dernier arrivé, la liste complète est: ");
mousquetaires.forEach(function(mousquetaire) {
    console.log(mousquetaire)
});



// array 2
var valeurs = [11, 3, 7, 2, 9, 10];
var somme = 0;
valeurs.push(25, 35, 6);
for (var i = 0; i < valeurs.length; i++) {
    somme += valeurs[i];
}
console.log("La somme des éléments vaut " + somme);

var max = valeurs[0];
for (var i = 1; i < valeurs.length; i++) {
    if (valeurs[i] > max) {
        max = valeurs[i];
    }
}
console.log("Le maximum des éléments est " + max);



// array 3
var mots = [];
var mot = "";
while (mot !== "stop") {
    mot = prompt("Entrez un mot ou tapez stop pour arrêter :");
    if (mot !== "stop") {
        mots.push(mot);
    }
}
mots.forEach(function(mot) {
    console.log(mot);
});