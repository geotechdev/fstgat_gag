var films = {
    init: function(titre, annee, real) {
        this.titre = titre;
        this.annee = annee;
        this.real = real;
    },
    decrire: function() {
        return this.titre + " (" + this.annee + ", " + this.real + ")";
    }
};
var film1 = Object.create(films);
film1.init("Le loup de Wall Street", 2013, "Martin Scorsese");
var film2 = Object.create(films);
film2.init("Vice-Versa", 2015, "Pete Docter");
var film3 = Object.create(films);
film3.init("Babysitting", 2013, "Philippe Lacheau et Nicolas Benamou");

console.log(film1.decrire());
console.log(film2.decrire());
console.log(film3.decrire());
