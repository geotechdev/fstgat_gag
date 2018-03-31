var CompteBancaire = {
    initCB: function(nom, solde) {
        "use strict";
        this.nom = nom;
        this.solde = solde;
    },
    debiter: function(montant) {
        "use strict";
        this.solde -= montant;
        return this.solde;
    },
    crediter: function(xxx) {
        "use strict";
        this.solde += xxx;
        return this.solde;
    },
    decrire: function() {
        "use strict";
        var description = "Titulaire: " + this.nom + ", solde : " + this.solde + " euros";
        return description;
    }
};
var CompteEpargne = Object.create(CompteBancaire);
CompteEpargne.initCE = function(nom, solde, interet) {
    "use strict";
    this.initCB(nom, solde);
    this.interet = interet;
};
CompteEpargne.ajouterInterets = function() {
    "use strict";
    this.solde = this.solde + (this.solde * this.interet);
    return this.solde;
};

var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());