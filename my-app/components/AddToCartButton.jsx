import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Root = styled(Link)`
  text-decoration: none;
  text-align: center;
  background: #4a90e2;
  color: white;
  padding: 8px 25px;
  width: 50%;
  border-radius: 50px;
  transition: background 0.3s ease;

  &:hover {
    background: #357abd;
  }
`;

export default function AddToCartButton({ href, target, className }) {
  return (
    <Root href={href} className={className} target={target}>
      Add To Cart
    </Root>
  );
}

AddToCartButton.defaultProps = {
  target: "_self",
};
