import React from "react";
import Image from "next/image";
import styled from "styled-components";
import StarHandler from "./StarHandler";
import SlashPrice from "./Text/SlashPrice";
import Price from "./Text/Price";
import LearnMoreButton from "./LearnMoreButton";
import { mobileBreakpoint } from "../constants";

const Root = styled.div`
  border: 1px solid #eee;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  padding: 24px 0px 18px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;

  //HOVER START
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(211, 211, 211, 0.7); /* Light gray with opacity */
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1; /* Ensure the overlay appears above the content */
    pointer-events: none; /* Prevent interaction issues */
  }

  &:hover::before {
    opacity: 1; /* Show the overlay on hover */
  }

  * {
    position: relative;
    z-index: 1000; /* Ensure content is above the overlay */
  }
  //HOVER END

  .hidden {
    display: none;
  }
  &:hover {
    .hidden {
      display: flex;
      flex-direction: column;
      justifty-content: center;
      align-items: center;
      align-content: center;
      position: absolute;
      top: 205px;
      padding: 12px;
      background: rgba(211, 211, 211, 0.7);
      height: 224px;
      width: 100%;
    }
  }

  @media (max-width: ${mobileBreakpoint}) {
    margin-bottom: 12px;
  }

  .title_container {
    text-align: center;
    max-width: 215px;
  }

  .strings_container {
    margin-bottom: 8px;
  }
`;

export default function Item({
  brand,
  modelType,
  numberOfStrings,
  isBass,
  stars,
  addOn,
  price,
  addOnAmount,
  images,
  _id,
  className,
}) {
  return (
    <Root className={className}>
      <div className="title_container">
        {brand} {modelType}
      </div>
      <p className="strings_container">
        {numberOfStrings} string {isBass === true ? "bass guitar" : "gutiar"}
      </p>
      <StarHandler stars={stars} />
      {addOn && (
        <>
          <br />
          <SlashPrice price={price} addOn={addOnAmount} />
        </>
      )}
      <Price>{price}</Price>

      <Image
        src={`${images}`}
        alt={`${brand}`}
        width={263} //273
        height={224} //197
        style={{ marginBottom: "8px" }}
      />
      <LearnMoreButton href={_id} />
      <div className="hidden">Learn More</div>
    </Root>
  );
}
