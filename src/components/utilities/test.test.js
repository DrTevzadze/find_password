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

test("Lowercase letter is included in the password", () => {
  expect(includeLowerCase("asdF")).toEqual(true); // At least one lowercase
  expect(includeLowerCase(["1", "b", "#", "F"])).toEqual(true); // At least one lowercase
  expect(includeLowerCase(" asdf ")).toEqual(true); // At least one lowercase
  expect(includeLowerCase(["a", "b", "c"])).toEqual(true); // At least one lowercase
  expect(includeLowerCase("FASF")).toEqual(false); // No lowercase
  expect(includeLowerCase("12341")).toEqual(false); // No lowercase
  expect(includeLowerCase("1234AFA")).toEqual(false); // No lowercase
  expect(includeLowerCase(1234)).toEqual(false); // No lowercase
  expect(includeLowerCase(null)).toEqual(false); // No lowercase
  expect(includeLowerCase(undefined)).toEqual(false); // No lowercase
  expect(includeLowerCase("")).toEqual(false); // No lowercase
  expect(includeLowerCase({ key: "value" })).toEqual(false); // No lowercase
  expect(includeLowerCase(" FASD!#$241 ")).toEqual(false); // No lowercase
  expect(includeLowerCase(["F", "A", "D"])).toEqual(false); // No lowercase
});

test("Uppercase letter is included in the password", () => {
  expect(includeUpperCase("FAS")).toEqual(true); // At least one uppercase
  expect(includeUpperCase(["1", "b", "#", "F"])).toEqual(true); // At least one uppercase
  expect(includeUpperCase(" ASFA ")).toEqual(true); // At least one uppercase
  expect(includeUpperCase(["A", "S", "D"])).toEqual(true); // At least one lowercase
  expect(includeUpperCase("asdf")).toEqual(false); // No lowercase
  expect(includeUpperCase("12341")).toEqual(false); // No lowercase
  expect(includeUpperCase("1234asdf")).toEqual(false); // No lowercase
  expect(includeUpperCase(1234)).toEqual(false); // No lowercase
  expect(includeUpperCase(null)).toEqual(false); // No lowercase
  expect(includeUpperCase(undefined)).toEqual(false); // No lowercase
  expect(includeUpperCase("")).toEqual(false); // No lowercase
  expect(includeUpperCase({ key: "VALUE" })).toEqual(false); // No lowercase
  expect(includeUpperCase(" awefa!#$241 ")).toEqual(false); // No lowercase
  expect(includeUpperCase(["a", "d", "f"])).toEqual(false); // No lowercase
});
