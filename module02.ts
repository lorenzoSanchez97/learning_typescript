//  interfaces ----------------------------------------------->

interface IceCream {
  flavor: string;
  scoops: number;
  instructions?: string;
}

// let myIceCream: IceCream = {
//   flavor: "Chocolate",
//   scoops: 3
// }

// console.log(myIceCream.flavor)

function tooManyScoops(dessert: Sundae) {
  if (dessert.scoops >= 4) {
    return dessert.scoops + " is too many scoops!"
  } else {
    return 'Your order will be ready soon!';
  }
}


console.log(tooManyScoops({ flavor: "Chocolate", scoops: 5, sauce: "strawberry", nuts: true }))


// extendiendo interfaces -------------------------------------------------------->

interface Sundae extends IceCream {
  sauce: 'chocolate' | 'caramel' | 'strawberry';
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}

let myIceCream: Sundae = {
  flavor: 'vanilla',
  scoops: 2,
  sauce: "strawberry",
  nuts: true
}