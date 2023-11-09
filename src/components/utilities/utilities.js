// Level 1

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  "|",
  ";",
  ":",
  "<",
  ">",
  ",",
  ".",
  "?",
  "/",
];
const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].toString();

const includeLowerCase = (input) => {
  if (input === null || input === undefined || input.length === 0) {
    return false;
  }

  for (let i = 0; i < input.length; i++) {
    if (letters.includes(input[i])) {
      return true;
    }
  }

  return false;
};

// Level 2

const includeUpperCase = (input) => {
  if (input === null || input === undefined || input.length === 0) {
    return false;
  }

  const upperCase = letters.map((letter) => letter.toUpperCase());
  for (let i = 0; i < input.length; i++) {
    if (upperCase.includes(input[i])) {
      return true;
    }
  }
  return false;
};

// Level 3

const includeSpecialCharacters = (input) => {
  if (input === null || input === undefined || input.length === 0) {
    return false;
  }

  for (let i = 0; i < input.length; i++) {
    if (specialCharacters.includes(input[i])) {
      return true;
    }
  }

  return false;
};

// Level 4

const includeNumber = (input) => {
  if (input === null || input === undefined || input.length === 0) {
    return false;
  }

  for (let i = 0; i < input.length; i++) {
    if (numbersArray.includes(input[i])) {
      return true;
    }
  }

  return false;
};

// Level 5

const sumOfNumbers = () => {};

// Level 6

const spellLastnameBackwards = () => {};

// Level 7 - Include one of the colors of the rainbow

const rainbowColor = () => {};

// Level 8 - Last 5 text letters need to be palindrome ("ana" = "ana"; "Ana" != "ana")

const palindrome = () => {};

// Level 9 - The 5th and 7th characters must be numbers.

const fifthAndSeventhNumber = () => {};

// Level 10 - Place a random special character at the end of the password.

const symbolEnd = () => {};

export {
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
};
