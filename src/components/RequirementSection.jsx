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
  fifthAndSeventhNumber,
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
  const isFifthAndSeventhNumber = useValidationEffect(
    text,
    fifthAndSeventhNumber
  );
  const isSymbolEnd = useValidationEffect(text, symbolEnd);
  const isStartNumber = useValidationEffect(text, startNumber);

  const cardData = [
    { content: "Level 1", isValid: isLowerCaseValid },
    { content: "Level 2", isValid: isUpperCaseValid },
    { content: "Level 3", isValid: isSpecialCharacter },
    { content: "Level 4", isValid: isSumNumbers },
    { content: "Level 5", isValid: isLastName },
    { content: "Level 6", isValid: isRainbow },
    { content: "Level 7", isValid: isPalindrome },
    { content: "Level 8", isValid: isFifthAndSeventhNumber },
    { content: "Level 9", isValid: isSymbolEnd },
    { content: "Level 10", isValid: isStartNumber },
  ];

  return (
    <>
      {cardData.map(({ content, isValid }, index) => (
        <div key={index} className={`card ${isValid ? "green" : "red"}`}>
          <Card content={content} text={text} />
        </div>
      ))}
    </>
  );
}

export default RequirementSection;
