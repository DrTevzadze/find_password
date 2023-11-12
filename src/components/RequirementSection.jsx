/* eslint-disable react/prop-types */
import Card from "./Card";
import { useEffect, useState } from "react";
// Import Requirement Functions
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
} from "./utilities/utilities";

// Helper Function!
function useValidationEffect(text, validationFunction) {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const result = validationFunction(text);
    setIsValid(result);
  }, [text, validationFunction]);

  return isValid;
}

// Function Component!

function RequirementSection({ text }) {
  // #region Variables
  const isLowerCaseValid = useValidationEffect(text, includeLowerCase);
  const isUpperCaseValid = useValidationEffect(text, includeUpperCase);
  const isSpecialCharacter = useValidationEffect(
    text,
    includeSpecialCharacters
  );
  const isSumNumbers = useValidationEffect(text, sumOfNumbers);
  const isLastName = useValidationEffect(text, spellLastnameBackwards);
  const isRainbow = useValidationEffect(text, rainbowColor);
  const isPalindrome = useValidationEffect(text, palindrome);
  const isSixthAndSeventhNumber = useValidationEffect(
    text,
    sixthAndSeventhNumber
  );
  const isSymbolEnd = useValidationEffect(text, symbolEnd);
  const isStartNumber = useValidationEffect(text, startNumber);
  //#endregion
  const cardData = [
    {
      content:
        "Make your password stronger by adding at least one lowercase letter.",
      isValid: isLowerCaseValid,
    },
    {
      content:
        "Level up your security with an uppercase letter in your password.",
      isValid: isUpperCaseValid,
    },
    {
      content:
        "Add a layer of complexity with at least one special character in your password.",
      isValid: isSpecialCharacter,
    },
    {
      content: "Ensure the numbers in your password add up to a lucky 15.",
      isValid: isSumNumbers,
    },
    {
      content:
        "Include the author's last name, but keep it clean - no extra characters in the middle.",
      isValid: isLastName,
    },
    {
      content:
        "Infuse your password by including a hidden rainbow word. The letters don't need to be next to each other.",
      isValid: isRainbow,
    },
    {
      content:
        "Create a unique touch by adding a three-letter word that reads the same backward and forward, just before the last character.",
      isValid: isPalindrome,
    },
    {
      content:
        "Ensure the 6th and 8th characters in your password are both numbers.",
      isValid: isSixthAndSeventhNumber,
    },
    {
      content: "Place a special character at the very end of your password.",
      isValid: isSymbolEnd,
    },
    {
      content: "Start your password with a number for a numeric boost.",
      isValid: isStartNumber,
    },
  ];

  return (
    <div className="cards">
      {cardData.map(({ content, isValid }, index) => (
        <div key={index} className={`card ${isValid ? "green top-green" : "red top-red"}`}>
          <Card content={content} text={text} rule={`Rule ${index + 1}`} isValid={isValid} />
        </div>
      ))}
    </div>
  );
}

export default RequirementSection;
