// array of properties in specific order, represents object

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

const pepsi: [String, Boolean, Number] = ["brown", true, 40];

type Drink = [string, boolean, number];

const cola: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];

//pepsi[0] = 40;
