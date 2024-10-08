import React from "react";
import Image from "next/image";
import styled from "styled-components";
import StarHandler from "./StarHandler";
import LearnMoreButton from "./LearnMoreButton";
import { mobileBreakpoint } from "../constants";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 25%;
  margin: 12px 16.5px;
  text-align: center;
  border: 1px solid #eee;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  position: relative;

  .title_container {
    margin: 12px 0;
    font-size: 22px;
    line-height: 22px;
    letter-spacing: 0.5px;
    font-weight: 400;
  }

  @media (max-width: ${mobileBreakpoint}) {
    width: 90%;
  }
`;

const Overlay = styled.div`
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(235, 235, 235, 0.7);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1; /
    pointer-events: none; 
  }

  &:hover::before {
    opacity: 1; /* Show the overlay on hover */
  }

  * {
    position: relative;
  }

  .learn-more-container {
    display: none;
  }

  &:hover {
    .learn-more-container {
      display: flex;
      position: absolute;
      width: 100%;
      top: 50%;
      left: 75%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }
  }
`;

export default function Item({
  brand,
  modelType,
  stars,
  images,
  _id,
  //className,
}) {
  return (
    <Root>
      <Overlay>
        <>
          <div className="title_container">
            {brand} {modelType}
          </div>
          <StarHandler stars={stars} />
          <div className="learn-more-container">
            <LearnMoreButton href={_id} />
          </div>
          <Image
            src={`${images}`}
            alt={`${brand}`}
            width={263}
            height={224}
            style={{ marginTop: "12px" }}
          />
        </>
      </Overlay>
    </Root>
  );
}
