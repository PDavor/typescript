// same as with variables, if its init then its not necessary to annotate
// when init empty aray then must anotate
const carMakers: string[] = ["ford", "toyota", "chevy"];

const date = [new Date(), new Date()];

// 2d array string[][]
const carsByMake = [["f150"], ["corola"], ["camaro"]];

// help with inference when extracting values
const someCar = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(100);

// help with map
carMakers.map((car: string): string => {
  return car.toLowerCase();
});

// flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2030-10-10");
importantDates.push(new Date());
importantDates.push(123);
