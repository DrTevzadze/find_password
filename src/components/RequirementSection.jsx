/* eslint-disable react/prop-types */
import Card from "./Card";
import { useEffect, useState } from "react";
import * as utility from "./utilities/utilities";
//Add destr "text" in function

function RequirementSection({ text }) {
  const [isLowerCaseValid, setIsLowerCaseValid] = useState(false);
  const [isUpperCaseValid, setIsUpperCaseValid] = useState(false);
  const [isSpecialCharacter, setIsSpecialCharacter] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSumNumbers, setIsSumNumbers] = useState(false);
  const [isLastName, setIsLastName] = useState(false);
  const [isRainbow, setIsRainbow] = useState(false);
  const [isPalindrome, setIsPalindrome] = useState(false);
  const [isFifthAndSeventhNumber, setIsFifthAndSeventhNumber] = useState(false);
  const [isSymbolEnd, setIsSymbolEnd] = useState(false);
  const [isStartNumber, setIsStartNumber] = useState(false);

  useEffect(() => {
    const result = utility.includeLowerCase(text);
    setIsLowerCaseValid(result);
  }, [text]);
  useEffect(() => {
    const result = utility.includeUpperCase(text);
    setIsUpperCaseValid(result);
  }, [text]);
  useEffect(() => {
    const result = utility.includeSpecialCharacters(text);
    setIsSpecialCharacter(result);
  }, [text]);
  useEffect(() => {
    const result = utility.includeNumber(text);
    setIsNumber(result);
  }, [text]);
  useEffect(() => {
    const result = utility.sumOfNumbers(text);
    setIsSumNumbers(result);
  }, [text]);
  useEffect(() => {
    const result = utility.spellLastnameBackwards(text);
    setIsLastName(result);
  }, [text]);
  useEffect(() => {
    const result = utility.rainbowColor(text);
    setIsRainbow(result);
  }, [text]);
  useEffect(() => {
    const result = utility.palindrome(text);
    setIsPalindrome(result);
  }, [text]);
  useEffect(() => {
    const result = utility.fifthAndSeventhNumber(text);
    setIsFifthAndSeventhNumber(result);
  }, [text]);
  useEffect(() => {
    const result = utility.symbolEnd(text);
    setIsSymbolEnd(result);
  }, [text]);
  useEffect(() => {
    const result = utility.startNumber(text);
    setIsStartNumber(result);
  }, [text]);

  return (
    <>
      <div className={`card ${isLowerCaseValid ? "green" : "red"}`}>
        <Card content="Level 1" text={text} />
      </div>
      <div className={`card ${isUpperCaseValid ? "green" : "red"}`}>
        <Card content="Level 2" text={text} />
      </div>
      <div className={`card ${isSpecialCharacter ? "green" : "red"}`}>
        <Card content="Level 3" text={text} />
      </div>
      <div className={`card ${isNumber ? "green" : "red"}`}>
        <Card content="Level 4" text={text} />
      </div>
      <div className={`card ${isSumNumbers ? "green" : "red"}`}>
        <Card content="Level 5" text={text} />
      </div>
      <div className={`card ${isLastName ? "green" : "red"}`}>
        <Card content="Level 6" text={text} />
      </div>
      <div className={`card ${isRainbow ? "green" : "red"}`}>
        <Card content="Level 7" text={text} />
      </div>
      <div className={`card ${isPalindrome ? "green" : "red"}`}>
        <Card content="Level 8" text={text} />
      </div>
      <div className={`card ${isFifthAndSeventhNumber ? "green" : "red"}`}>
        <Card content="Level 9" text={text} />
      </div>
      <div className={`card ${isSymbolEnd ? "green" : "red"}`}>
        <Card content="Level 10" text={text} />
      </div>
      <div className={`card ${isStartNumber ? "green" : "red"}`}>
        <Card content="Level 11" text={text} />
      </div>
    </>
  );
}

export default RequirementSection;
