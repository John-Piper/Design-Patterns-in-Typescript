//Strategy Design Pattern
//Defines a family of algorithms,
//encapsulates each one and makes them interchangeable.

interface StrategyInterface {
  calculateDiscount(price: number): number;
}

class FamilyDiscount implements StrategyInterface {
  calculateDiscount(price: number): number {
    return price * 0.9;
  }
}

class LoyaltyDiscount implements StrategyInterface {
  calculateDiscount(price: number): number {
    return price * 0.8;
  }
}

class NoDiscount implements StrategyInterface {
  calculateDiscount(price: number): number {
    return price;
  }
}

class Context {
  excuteStrategy(strategyInterface: StrategyInterface, price: number): number {
    return round(strategyInterface.calculateDiscount(price), 2);
  }
}

//Helper function
const round = (n: number, decimalPlaces: number): number => {
  const numForSum = Math.pow(10, decimalPlaces);
  return Math.round(n * numForSum + Number.EPSILON) / numForSum;
};

const main = () => {
  const price = 29.99;

  const context = new Context();

  console.log(context.excuteStrategy(new FamilyDiscount(), price));
  //26.99

  console.log(context.excuteStrategy(new LoyaltyDiscount(), price));
  //23.99

  console.log(context.excuteStrategy(new NoDiscount(), price));
  //29.99
};

main();
