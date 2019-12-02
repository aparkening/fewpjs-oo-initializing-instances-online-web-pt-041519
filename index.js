class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad
    this.soup = soup
    this.drink = drink
  }
}

class Dinner {
  constructor(salad, soup, entree, dessert) {
    this.salad = salad
    this.soup = soup
    this.entree = entree
    this._dessert = dessert
  }
}

// let earlyMeal = new Breakfast('cereal', 'juice')
// let midMeal = new Lunch('iceberg', 'miso', 'water')
// let lateMeal = new Dinner('fennel', 'pumpkin', 'chicken', 'jello')

// console.log(earlyMeal)
// console.log(`Breakfast food was ${earlyMeal.food}`)

// console.log(midMeal)
// console.log(`Lunch drink was ${midMeal.drink}`)

// console.log(lateMeal)
// console.log(`Dinner entree was ${lateMeal.entree}`)

