import { expect, test } from "vitest";
import {
  includeLowerCase,
  includeUpperCase,
  includeSpecialCharacters,
  includeNumber,
  sumOfNumbers,
  spellLastnameBackwards,
  rainbowColor,
  palindrome,
  fifthAndSeventhNumber,
  symbolEnd,
} from "./utilities";

// test("adds 1 + 2 to equal 3", () => {
//   expect(sumNumbers(3)).toEqual(3);
// });

test("Lowercase Letter is included in the password", () => {
  expect(includeLowerCase("asdF")).toEqual(true); //At least one lowercase
  expect(includeLowerCase("FASF")).toEqual(false); // No lowercase
  expect(includeLowerCase("12341")).toEqual(false); // No lowercase
  expect(includeLowerCase("1234AFA")).toEqual(false); // No lowercase
  expect(includeLowerCase(1234)).toEqual(false); // No lowercase
  expect(includeLowerCase(null)).toEqual(false); // No lowercase
  expect(includeLowerCase(undefined)).toEqual(false); // No lowercase
  expect(includeLowerCase("")).toEqual(false); // No lowercase
  expect(includeLowerCase({ key: "value" })).toEqual(false); // No lowercase
  expect(includeLowerCase(" FASD!#$241 ")).toEqual(false); // No lowercase
  expect(includeLowerCase(" asdf ")).toEqual(true); // At least one lowercase
  expect(includeLowerCase(["a", "b", "c"])).toEqual(true); // At least one lowercase
  expect(includeLowerCase(["F", "A", "D"])).toEqual(false); // No lowercase
  expect(includeLowerCase(["1", "b", "#", "F"])).toEqual(true); // At least one lowercase
});
