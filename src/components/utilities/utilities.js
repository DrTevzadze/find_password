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

const includeLowerCase = (input) => {
  if (input === null || input === undefined || input.length === 0) {
    return false;
  }
  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
    if (letters.includes(input[i])) {
      return true;
    }
  }
  return false;
};

console.log(includeLowerCase(null));

// Level 2

const includeUpperCase = () => {};
// Level 3

const includeSpecialCharacters = () => {};

// Level 4

const includeNumber = () => {};

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
