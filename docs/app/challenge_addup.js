//to add up from one to a random number
var number = Number(Math.floor(Math.random() * 1000));
document.write("The number is " + number);
var result = 0;
for (var i = 1; i < number; i++) {
    result = result + i;
}
document.write("The sum of the add up from 1 to the number is " + result);
//another way to add up
function SimpleAdding(num) {
    return (num * (num + 1)) / 2;
}
document.write("If we use another way to find the result");
document.write("Say a JS function by the mathematical n(n+1)/2");
document.write("We find this result " + SimpleAdding(number) + "\nDafuq?");