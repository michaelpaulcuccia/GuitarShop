import React from "react";
import styled from "styled-components";
import { mobileBreakpoint } from "../constants";

const Root = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;

  //ADD THIS STYLING TO NEW ITEM
  div {
    padding: 10px;
    width: 25%;
    background-color: black;
    color: white;
    margin: 12px 15px;

    @media (max-width: ${mobileBreakpoint}) {
      width: 90%;
    }
  }
`;

export default function NewOtherItemsContainer() {
  return (
    <Root>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </Root>
  );
}
