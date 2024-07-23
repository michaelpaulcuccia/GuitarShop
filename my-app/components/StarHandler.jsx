import React from "react";
import { IoStar, IoStarHalf } from "react-icons/io5";

const StarHandler = ({ rating }) => {
  //for some reason, the number taken in has to added to a new variable to work ???
  let newNum = rating;
  console.log(newNum);

  //check for decimal point
  const hasDecimalPoint = (rating = rating.toString().includes("."));

  //if decimal exists, subtract it
  let numNoDecimal;
  if (hasDecimalPoint) {
    numNoDecimal = newNum - 0.5;
    //create an array
    let arrayWithHalfStar = new Array(numNoDecimal);
    console.log(arrayWithHalfStar);
    return arrayWithHalfStar;
  }

  return <div>hello</div>;
};

export default StarHandler;
