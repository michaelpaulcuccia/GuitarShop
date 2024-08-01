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
    </Root>
  );
}
