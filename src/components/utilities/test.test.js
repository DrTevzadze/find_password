import { expect, test } from "vitest";
import {
  includeLowerCase,
  includeUpperCase,
  includeSpecialCharacters,
  sumOfNumbers,
  spellLastnameBackwards,
  rainbowColor,
  palindrome,
  sixthAndSeventhNumber,
  symbolEnd,
  startNumber,
} from "./utilities";

test("Level 1 - Lowercase letter is included in the password", () => {
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

test("Level 2 - Uppercase letter is included in the password", () => {
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

test("Level 3 - Special character is included in the password", () => {
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

test("Level 4 - Sum of numbers has to be 15", () => {
  expect(sumOfNumbers("asdf771")).toEqual(true);
  expect(sumOfNumbers("96")).toEqual(true);
  expect(sumOfNumbers({ key: "555" })).toEqual(false);
  expect(sumOfNumbers(96)).toEqual(false);
  expect(sumOfNumbers(" awefa!#$241 ")).toEqual(false);
  expect(sumOfNumbers("")).toEqual(false);
});

test("Level 5 - Password must include my last name (UPPERCASED)", () => {
  expect(spellLastnameBackwards("EZDAZVET")).toEqual(true);
  expect(spellLastnameBackwards("fsaEZDAZVET")).toEqual(true);
  expect(spellLastnameBackwards("EZDAZVETadwa")).toEqual(true);
  expect(spellLastnameBackwards("321EZDAZVETadwa")).toEqual(true);
  expect(spellLastnameBackwards("321EZDAZVET@#$@!")).toEqual(true);
  expect(spellLastnameBackwards(" EZDAZVET ")).toEqual(true);
  expect(spellLastnameBackwards("E2ZDAZVETT")).toEqual(false);
  expect(spellLastnameBackwards("EZD#AZVET")).toEqual(false);
  expect(spellLastnameBackwards("ezdavzet")).toEqual(false);
  expect(spellLastnameBackwards("eZdavzET")).toEqual(false);
  expect(spellLastnameBackwards("EZDAZ VET")).toEqual(false);
  expect(spellLastnameBackwards("#$%^&*")).toEqual(false);
  expect(spellLastnameBackwards("")).toEqual(false);
});

test("Level 6 - Combined letters in the password create one of the rainbow color", () => {
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

test("Level 7 - 3 letter palindrome word before the last character", () => {
  expect(palindrome("awdf222qweewe3")).toEqual(true);
  expect(palindrome("ana")).toEqual(false);
  expect(palindrome("awdfana3")).toEqual(true);
  expect(palindrome("1231!@#1 ana$")).toEqual(true);
  expect(palindrome("")).toEqual(false);
  expect(palindrome(" ")).toEqual(false);
  expect(palindrome("ana 3")).toEqual(false);
  expect(palindrome("awifjiawoe123")).toEqual(false);
  expect(palindrome("12341")).toEqual(false);
  expect(palindrome("12221")).toEqual(false);
  expect(palindrome(12341)).toEqual(false);
});

test("Level 8 - The 6th and 8th characters must be numbers", () => {
  expect(sixthAndSeventhNumber("123456789")).toEqual(true);
  expect(sixthAndSeventhNumber("12345a7a9")).toEqual(false);
  expect(sixthAndSeventhNumber("asgeagawgega")).toEqual(false);
  expect(sixthAndSeventhNumber("asdfa4f5a")).toEqual(true);
  expect(sixthAndSeventhNumber("")).toEqual(false);
  expect(sixthAndSeventhNumber("!@$!#5#4#@")).toEqual(true);
  expect(sixthAndSeventhNumber("asf34")).toEqual(false);
  expect(sixthAndSeventhNumber("as")).toEqual(false);
  expect(sixthAndSeventhNumber("123")).toEqual(false);
  expect(sixthAndSeventhNumber(123456789)).toEqual(false);
  expect(sixthAndSeventhNumber("abcde6789")).toEqual(true);
  expect(sixthAndSeventhNumber("12a45a78")).toEqual(false);
  expect(sixthAndSeventhNumber("123456")).toEqual(false);
  expect(sixthAndSeventhNumber("a1b2c3d4e5f6g7h8i9")).toEqual(true);
  expect(sixthAndSeventhNumber("abcd!@#efg")).toEqual(false);
  expect(sixthAndSeventhNumber("12345 67 89")).toEqual(false);
  expect(sixthAndSeventhNumber(undefined)).toEqual(false);
  expect(sixthAndSeventhNumber(null)).toEqual(false);
  expect(sixthAndSeventhNumber({ key: "value" })).toEqual(false);
  expect(
    sixthAndSeventhNumber(["1", "2", "3", "4", "5", "6", "7", "8", "9"])
  ).toEqual(false); //
});

test("Level 9 - Ends with a special character", () => {
  expect(symbolEnd("1234!")).toEqual(true);
  expect(symbolEnd("1234!@$!")).toEqual(true);
  expect(symbolEnd("!")).toEqual(true);
  expect(symbolEnd("123")).toEqual(false);
  expect(symbolEnd("!@#123")).toEqual(false);
  expect(symbolEnd("1W2#3")).toEqual(false);
  expect(symbolEnd("1W2#3 ")).toEqual(false);
  expect(symbolEnd("")).toEqual(false);
  expect(symbolEnd(" ")).toEqual(false);
});

test("Level 10 - Starts with a number", () => {
  expect(startNumber("123asdf")).toEqual(true);
  expect(startNumber("asd12")).toEqual(false);
  expect(startNumber("")).toEqual(false);
  expect(startNumber(" ")).toEqual(false);
  expect(startNumber("!@#!12sad")).toEqual(false);
  expect(startNumber("12!@#!12sad")).toEqual(true);
  expect(startNumber(1234)).toEqual(false);
});
