import React from "react";
import styled from "styled-components";

const Root = styled.h2`
  color: #ee2d43;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: 0.18px;
  text-height-adjust: auto;
  font-weight: bold;
  margin: 8px 0 8px 0;
`;

export default function Price({ children }) {
  return <Root>${children}</Root>;
}
