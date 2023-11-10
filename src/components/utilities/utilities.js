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

// Level 5 - SUM = 15

const sumOfNumbers = (input) => {
  if (input === null || input === undefined || input.length === 0) {
    return false;
  }

  const numbers = [];
  for (let i = 0; i < input.length; i++) {
    if (numbersArray.includes(input[i])) {
      numbers.push(parseInt(input[i]));
    }
  }

  const sum = numbers.reduce((total, accumulated) => total + accumulated, 0);

  if (sum === 15) {
    return true;
  }
  return false;
};

// Level 6 - name must be all uppercased

const spellLastnameBackwards = (input) => {
  if (input.includes("EZDAZVET")) {
    return true;
  } else {
    return false;
  }
};

// Level 7 - Include letters so that combined letters make one of the rainbow colors

const rainbow = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];

const rainbowColor = (input) => {
  const lowercasedInput = input.toLowerCase(); // Convert input to lowercase for case-insensitive comparison
  return rainbow.some((color) => {
    const lowercasedColor = color.toLowerCase(); // Convert color to lowercase for case-insensitive comparison
    const colorLetters = lowercasedColor.split("");

    return colorLetters.every((letter) => {
      const inputCount = lowercasedInput.split(letter).length - 1;
      const colorCount = colorLetters.join("").split(letter).length - 1;
      return inputCount >= colorCount;
    });
  });
};

// Level 8 - -1 Last 3 text letters need to be palindrome ("ana" = "ana"; "Ana" != "ana")
//Ensure that your password includes a 3-character word that reads the same backward as forward. This word should be positioned just before the last character in the password.

const palindrome = (input) => {
  if (input.length < 3 || typeof input !== "string") {
    return false;
  }

  const beforeLastSlice = input.slice(-4, -1);

  for (let i = 0; i < beforeLastSlice.length; i++) {
    if (numbersArray.includes(beforeLastSlice[i])) {
      return false;
    }
  }

  const reverseString = beforeLastSlice.split("").reverse().join("");

  return beforeLastSlice === reverseString;
};

// Level 9 - The 5th and 7th characters must be numbers.

const sixthAndSeventhNumber = (input) => {
  if (!input || input.length < 8 || typeof input !== "string") {
    return false;
  }

  const charAt5 = input.charAt(5);
  const charAt7 = input.charAt(7);

  const numberFive = charAt5 === " " ? NaN : Number(charAt5);
  const numberSeven = charAt5 === " " ? NaN : Number(charAt7);

  if (!isNaN(numberFive) && !isNaN(numberSeven)) {
    return true;
  } else {
    return false;
  }
};

// Level 10 - Place a random special character at the end of the password.

const symbolEnd = (input) => {
  const lastChar = input.length - 1;
  return specialCharacters.includes(input.charAt(lastChar));
};

// Level 11 - The password MUST start with a number

const startNumber = (input) => {
  if (typeof input !== "string") {
    return false;
  }
  return !isNaN(parseInt(input));
};

export {
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
};
