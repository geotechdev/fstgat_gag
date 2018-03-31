let demo = document.getElementById('demo');
let damo = document.getElementById('damo');
let appear = (value) => {
    demo.style.display = value;
};
let changeCouleur = (nvCouleur) => {
    demo.style.color = nvCouleur;
};
let changeText = (gras) => {
    demo.style.fontWeight = gras;
};
let changeTaille = (nvTaille) => {
    demo.style.fontSize = nvTaille + 'em';
};
let changeFond = (nvCouleur) => {
    damo.style.backgroundColor = nvCouleur;
};