import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-weight: 600;
    font-size: 48px;
    line-height: 48px;
  }

  h3 {
    font-weight: 400;
    font-size: 36px;
    line-height: 36px;
  }
`;

export default function SaleText({ headline, text }) {
  return (
    <Root>
      <h2>{headline}</h2>
      <br />
      <h3> {text}</h3>
    </Root>
  );
}
