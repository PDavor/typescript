// accepts two number params, returns number
// will show error if we arent returning number
// ts can infer return type, but its recommended to annotate it
const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// void can return nothing, void, undefined, null
const logger = (msg: string): void => {
  console.log(msg);
};

// never reaching end of function
const throwError = (msg: string): never => {
  throw new Error(msg);
};

// destructuring
const forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);
