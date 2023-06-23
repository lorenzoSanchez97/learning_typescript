"use strict";
//  interfaces ----------------------------------------------->
// let myIceCream: IceCream = {
//   flavor: "Chocolate",
//   scoops: 3
// }
// console.log(myIceCream.flavor)
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + " is too many scoops!";
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({ flavor: "Chocolate", scoops: 5, sauce: "strawberry", nuts: true }));
let myIceCream = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: "strawberry",
    nuts: true
};
