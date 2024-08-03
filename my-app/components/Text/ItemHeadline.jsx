import React from "react";
import styled from "styled-components";

const Root = styled.p`
  font-size: 28px;
  line-height: 32px;
  font-weight: 600;
  letter-spacing: -0.25px;
  text-height-adjust: auto;
  margin-bottom: 8px;

  span {
    font-size: 32px;
    line-height: 34px;
    font-weight: 700;
    letter-spacing: -0.5px;
    text-height-adjust: auto;
  }
`;

export default function ItemHeadline({ children }) {
  return <Root>{children}</Root>;
}
