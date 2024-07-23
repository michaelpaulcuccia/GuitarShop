import React from "react";
import styled from "styled-components";

const Root = styled.p`
  font-size: 28px;
  line-height: 28px;
  font-weight: 600;
  letter-spacing: -0.25px;
  text-height-adjust: auto;
  margin-bottom: 8px;
`;

export default function ItemHeadline({ children }) {
  return <Root>{children}</Root>;
}
