import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { mobileBreakpoint } from "../constants";
import ItemHeadline from "./Text/ItemHeadline";

const Root = styled.div`
  position: relative;
  width: 35%;
  height: 275px; /* Adjust the height as needed */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  border: 1px solid #eee;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);

  .mobile {
    display: none;
    @media (max-width: ${mobileBreakpoint}) {
      display: block;
    }
  }

  .desktop {
    display: block;
    @media (max-width: ${mobileBreakpoint}) {
      display: none;
    }
  }

  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
  }

  .heroImage {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(30deg);
    z-index: -1;
  }
`;

const MainTextContainer = styled.div`
  position: relative;
  text-align: center;
  z-index: 1;
  margin-top: 20px;
`;

export default function Hero({ headline, subText, instrumentType, image }) {
  return (
    <Root>
      <MainTextContainer>
        <ItemHeadline>{headline}</ItemHeadline>
        <p style={{ fontWeight: "400" }}>{subText}</p>
      </MainTextContainer>
      <div className="desktop">
        <Image
          src={image}
          alt="Background Image"
          width="325"
          height="325"
          layout="intrinsic"
          className="heroImage"
        />
      </div>
      <div className="mobile">
        <Image
          src={image}
          alt="Background Image"
          width="275"
          height="275"
          layout="intrinsic"
          className="heroImage"
        />
      </div>
    </Root>
  );
}
