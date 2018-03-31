function Pastry(type, flavor, price) {
    this.type = type;
    this.flavor = flavor;
    this.price = price;
}
Pastry.prototype.describe = function() {
    return "The " + this.type + " is of a " + this.flavor + " flavor and has a price of " + this.price;
};
var muffin = new Pastry("muffin", "strawberyy", 10);
var cake = new Pastry("cake", "vanilla", 50);
console.log(muffin.describe());
console.log(cake.describe());
