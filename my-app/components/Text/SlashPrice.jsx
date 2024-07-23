import React from "react";
import styled from "styled-components";

const Root = styled.s`
  color: #999999;
  font-size: 22px;
  line-height: 22px;
  text-height-adjust: auto;
`;

export default function SlashPrice({ price, addOn }) {
  return <Root>${price + addOn}</Root>;
}
