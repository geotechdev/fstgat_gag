var Chien = {
    init: function(nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    aboyer: function() {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
};
var chenil = [];
var chien1 = Object.create(Chien);
chien1.init("Crokdur", "mâtin de Naples", 75);
var chien2 = Object.create(Chien);
chien2.init("Pupuce", "bichon", 22);
var chien3 = Object.create(Chien);
chien3.init("Médor", "labrador", 58);
chenil.push(chien1);
chenil.push(chien2);
chenil.push(chien3);
console.log("Le chenil héberge " + chenil.length + " chiens :");
chenil.forEach(function(chien) {
    console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm. Il aboie : " + chien.aboyer());
});