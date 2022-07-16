import { monthsArray } from "../assets/months";

export const parseDaysInTheQueue = (value: number) => {
  const noun = value == 1 ? " dzień" : " dni";
  return value.toString() + noun;
};

export const parseLengthOfTheQueue = (value: number) => {
  const noun = [1, 5, 6, 7, 8, 9, 0].includes(value % 10)
    ? value == 1
      ? " osoba"
      : " osób"
    : " osoby";
  return value.toString() + noun;
};

export const parseDateToString = (value: string) => {
  const valArr = value.split("-");
  valArr[1] = monthsArray[parseInt(valArr[1]) - 1];
  return valArr.reverse().join(" ");
};
