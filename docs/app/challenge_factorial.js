//challene: output the factorial of any integer input
function FirstFactorial(num) {
    var numero = 1;
    for (var k = 1; k <= num; k++) {
        numero = numero * k;
    }
    return numero;
}
var inputX = Number(prompt("Entrez un numéro pour trouver son factorielle:"));
document.write(FirstFactorial(inputX));