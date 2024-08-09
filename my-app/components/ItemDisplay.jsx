import React from "react";
import styled from "styled-components";
import Image from "next/image";
import ItemHeadline from "./Text/ItemHeadline";
import StarHandler from "./StarHandler";
import Price from "./Text/Price";
import SlashPrice from "./Text/SlashPrice";
import { mobileBreakpoint } from "../constants";
//import Financing from "./Text/FinanceShipCustomerWarranty";

const textShrink = "1330px";

const Root = styled.div`
  background: black;
  color: white;
  padding: 48px 36px 30px 36px;

  .desktop-image {
    display: block;
    @media (max-width: ${mobileBreakpoint}) {
      display: none;
    }
  }

  .mobile-image {
    display: none;
    @media (max-width: ${mobileBreakpoint}) {
      display: flex;-
    }
  }
`;

const FlexOne = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageSide = styled.div`
  @media (max-width: ${mobileBreakpoint}) {
    display: flex;
    justify-content: center;
  }
`;

const ContentSide = styled.div`
  margin-left: 30px;

  @media (max-width: ${mobileBreakpoint}) {
    margin: 30px 12px 18px 12px;
  }
`;

const ScriptContainer = styled.div`
  margin-top: 18px;
  font-size: 20px;
  line-height: 24px;
  padding-right: 8px;

  @media (max-width: ${textShrink}) {
    font-size: 18px;
    line-height: 20px;
  }
`;

export default function ItemDisplay({
  img,
  brand,
  modelType,
  numberOfStrings,
  isBass,
  stars,
  addOn,
  price,
  addOnAmount,
  description,
  numberAvailable,
}) {
  console.log(img[0]);
  return (
    <Root>
      <FlexOne>
        <ImageSide>
          <div className="desktop-image">
            <Image
              src={img[0]}
              alt={`${brand}`}
              width={486}
              height={394}
              style={{ marginTop: "12px" }}
            />
          </div>
          <div className="mobile-image">
            <Image
              src={img[0]}
              alt={`${brand}`}
              width={263} //273
              height={224} //197
              style={{ marginBottom: "8px" }}
            />
          </div>
        </ImageSide>
        <ContentSide>
          <ItemHeadline>
            {brand} {modelType}
          </ItemHeadline>
          <p style={{ marginBottom: "8px" }}>
            {numberOfStrings} string{" "}
            {isBass === true ? "bass guitar" : "gutiar"}
          </p>
          <StarHandler stars={stars} />
          {addOn && <SlashPrice price={price} addOn={addOnAmount} />}
          <Price>{price}</Price>
          <p>{numberAvailable} left in stock!</p>
          <ScriptContainer>{description}</ScriptContainer>
        </ContentSide>
      </FlexOne>
      {/* <Financing /> */}
    </Root>
  );
}
