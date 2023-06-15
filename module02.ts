//  interfaces ----------------------------------------------->

interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string;
  }
  
  let myIceCream: IceCream = {
    flavor: "Chocolate",
    scoops: 3,
    instructions: ""
  }
  
  console.log(myIceCream.flavor)
  
  function tooManyScoops(dessert: IceCream) {
    if (dessert.scoops >= 4) {
      return dessert.scoops + " is too many scoops!"
    } else {
      return 'Your order will be ready soon!';
    }
  }
  
  console.log(tooManyScoops({flavor: "Chocolate", scoops: 3}))