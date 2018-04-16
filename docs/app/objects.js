// object person
var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    xp: 0,
    decrire: () => {
        return this.nom + " a " + this.sante + " points de vie et " +
            this.force + " en force";
    }
};
console.log("\n" + perso.decrire());
perso.sante -= 20;
perso.force += 10;
perso.xp += 15;
console.log(perso.decrire());


// object chien
var chien = {
    nom: "Crockdur",
    race: "mâtin de Naples",
    taille: 75,
    aboyer: () => {
        return "Grrr ! Grrr !"
    }
};
console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());



// object maths
console.log("\nVous entrez un rayon d'un cercle que nous renvoyons p et s")
var r = Number(prompt("Entrez le rayon d'un cercle :"));
var cercle = {
    perimetre: () => {
        return r * 2 * Math.PI;
    },
    aire: () => {
        return r * r * Math.PI;
    }
};

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());


// object banque
var compte = {
    titulaire: "Alex",
    solde: 0,
    crediter: function(royal) {
        this.solde += royal;
    },
    debiter: function(royal) {
        this.solde -= royal;
    },
    decrire: function() {
        var description = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros.";
        return description;
    }
};
console.log(compte.decrire());

var credit = Number(prompt("Entrez le montant à céditer"));
compte.crediter(credit);
var debit = Number(prompt("Entrez le montant à débiter"));
compte.debiter(debit);

console.log(compte.decrire());
