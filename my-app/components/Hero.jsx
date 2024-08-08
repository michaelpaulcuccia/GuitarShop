import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { mobileBreakpoint } from "../constants";
import ItemHeadline from "./Text/ItemHeadline";
import { FaChevronRight } from "react-icons/fa6";

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

const StyledItemHeadline = styled(ItemHeadline)`
  margin-top: 12px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const MainTextContainer = styled.div`
  position: relative;
  z-index: 1;
  padding: 6px 12px;
  border: 1px solid black;
  border-radius: 24px;

  cursor: pointer;

  &:hover {
    border: 1px solid hsl(0, 0%, 33%);
    color: hsl(0, 0%, 33%);
    transition: color border 0.3s ease; /* Smooth transition */
    font-weight: 900;
  }
`;

export default function Hero({ headline, subText, instrumentType, image }) {
  return (
    <Root>
      <StyledItemHeadline>{headline}</StyledItemHeadline>
      <StyledLink href={`/instruments/` + instrumentType}>
        <MainTextContainer>
          <p style={{ fontWeight: "400" }}>
            {subText}
            {""}
            <FaChevronRight fontSize={10} style={{ marginLeft: "4px" }} />
          </p>
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
      </StyledLink>
    </Root>
  );
}
