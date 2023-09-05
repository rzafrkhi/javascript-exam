import { getprimeNumbers } from "./functions.js";
import { input } from "./importer.js";

export const randomNumberEvent = () => {
  const randomNumber = Math.floor(Math.random() * 100000);
  if (input) input.value = randomNumber.toString();
};

export const primeNumbersEvent = () => {
  const inputValue = input?.value;
  console.log(getprimeNumbers(inputValue));
};

export const clearInputValueEvent = () => {
  input!.value = "";
  console.log(getprimeNumbers([]));
};
