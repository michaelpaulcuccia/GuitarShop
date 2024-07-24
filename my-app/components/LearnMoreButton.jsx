import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Root = styled(Link)`
  text-decoration: none;
  text-align: center;
  background: #3b7d1a;
  color: white;
  padding: 8px 25px;
  margin-top: 18px;
  width: 50%;
  border-radius: 50px;
  transition: background 0.3s ease;

  &:hover {
    background: #316816;
  }
`;

export default function LearnMoreButton({ href, target, className }) {
  return (
    <Root href={href} className={className} target={target}>
      Learn More
    </Root>
  );
}

LearnMoreButton.defaultProps = {
  target: "_self",
};
