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
  expect(includeUpperCase(["A", "S", "D"])).toEqual(true); // At least one uppercase
  expect(includeUpperCase("asdf")).toEqual(false); // No uppercase
  expect(includeUpperCase("12341")).toEqual(false); // No uppercase
  expect(includeUpperCase("1234asdf")).toEqual(false); // No uppercase
  expect(includeUpperCase(1234)).toEqual(false); // No uppercase
  expect(includeUpperCase(null)).toEqual(false); // No uppercase
  expect(includeUpperCase(undefined)).toEqual(false); // No uppercase
  expect(includeUpperCase("")).toEqual(false); // No uppercase
  expect(includeUpperCase({ key: "VALUE" })).toEqual(false); // No uppercase
  expect(includeUpperCase(" awefa!#$241 ")).toEqual(false); // No uppercase
  expect(includeUpperCase(["a", "d", "f"])).toEqual(false); // No uppercase
});

test("Special character is included in the password", () => {
  expect(includeSpecialCharacters(" awefa!#$241 ")).toEqual(true);
  expect(includeSpecialCharacters(["1", "b", "#", "F"])).toEqual(true);
  expect(includeSpecialCharacters("FAS")).toEqual(false);
  expect(includeSpecialCharacters(" ASFA ")).toEqual(false);
  expect(includeSpecialCharacters(["A", "S", "D"])).toEqual(false);
  expect(includeSpecialCharacters(null)).toEqual(false);
  expect(includeSpecialCharacters(undefined)).toEqual(false);
  expect(includeSpecialCharacters({ key: "VALUE" })).toEqual(false);
  expect(includeSpecialCharacters("")).toEqual(false);
  expect(includeSpecialCharacters(1234)).toEqual(false);
});

test("Number is included in the password", () => {
  expect(includeNumber(" awefa!#$241 ")).toEqual(true);
  expect(includeNumber(["1", "b", "#", "F"])).toEqual(true);
  expect(includeNumber("12341")).toEqual(true);
  expect(includeNumber("FAS")).toEqual(false);
  expect(includeNumber(" ASFA ")).toEqual(false);
  expect(includeNumber(["A", "S", "D"])).toEqual(false);
  expect(includeNumber(null)).toEqual(false);
  expect(includeNumber(undefined)).toEqual(false);
  expect(includeNumber({ key: "VALUE" })).toEqual(false);
  expect(includeNumber("")).toEqual(false);
  expect(includeNumber(1234)).toEqual(false);
});

test("Sum of numbers has to be 15", () => {
  expect(sumOfNumbers("asdf771")).toEqual(true);
  expect(sumOfNumbers("96")).toEqual(true);
  expect(sumOfNumbers({ key: "555" })).toEqual(false);
  expect(sumOfNumbers(96)).toEqual(false);
  expect(sumOfNumbers(" awefa!#$241 ")).toEqual(false);
  expect(sumOfNumbers("")).toEqual(false);
});

test("Combined letters in the password create one of the rainbow color", () => {
  expect(rainbowColor("red")).toEqual(true);
  expect(rainbowColor("orange")).toEqual(true);
  expect(rainbowColor("yellow")).toEqual(true);
  expect(rainbowColor("green")).toEqual(true);
  expect(rainbowColor("blue")).toEqual(true);
  expect(rainbowColor("violet")).toEqual(true);
  expect(rainbowColor(" violet ")).toEqual(true);
  expect(rainbowColor("indigo")).toEqual(true);
  expect(rainbowColor("i4nd3ifgo1234")).toEqual(true);
  expect(rainbowColor("WnDigO")).toEqual(false);
  expect(rainbowColor("InDigO")).toEqual(true);
  expect(rainbowColor(" InDigO  ")).toEqual(true);
  expect(rainbowColor("RED")).toEqual(true);
  expect(rainbowColor("ReD")).toEqual(true);
  expect(rainbowColor("rEd")).toEqual(true);
  expect(rainbowColor("VioLeT")).toEqual(true);
});

test("The 5th and 7th characters must be numbers", () => {
  expect(fifthAndSeventhNumber("123456789")).toEqual(true);
  expect(fifthAndSeventhNumber("12345a7a9")).toEqual(false);
  expect(fifthAndSeventhNumber("asgeagawgega")).toEqual(false);
  expect(fifthAndSeventhNumber("asdfa4f5a")).toEqual(true);
  expect(fifthAndSeventhNumber("")).toEqual(false);
  expect(fifthAndSeventhNumber("!@$!#5#4#@")).toEqual(true);
  expect(fifthAndSeventhNumber("asf34")).toEqual(false);
  expect(fifthAndSeventhNumber("as")).toEqual(false);
  expect(fifthAndSeventhNumber("123")).toEqual(false);
  expect(fifthAndSeventhNumber(123456789)).toEqual(false);
  expect(fifthAndSeventhNumber("abcde6789")).toEqual(true);
  expect(fifthAndSeventhNumber("12a45a78")).toEqual(false);
  expect(fifthAndSeventhNumber("123456")).toEqual(false);
  expect(fifthAndSeventhNumber("a1b2c3d4e5f6g7h8i9")).toEqual(true);
  expect(fifthAndSeventhNumber("abcd!@#efg")).toEqual(false);
  expect(fifthAndSeventhNumber("12345 67 89")).toEqual(false);
  expect(fifthAndSeventhNumber(undefined)).toEqual(false);
  expect(fifthAndSeventhNumber(null)).toEqual(false);
  expect(fifthAndSeventhNumber({ key: "value" })).toEqual(false);
  expect(
    fifthAndSeventhNumber(["1", "2", "3", "4", "5", "6", "7", "8", "9"])
  ).toEqual(false); //
});
