import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Root = styled(Link)`
  text-decoration: none;
  text-align: center;
  background: gray;
  color: white;
  padding: 8px 25px;
  margin-top: 18px;
  width: 50%;
  border-radius: 50px;
  transition: background 0.3s ease;

  &:hover {
    background-color: hsl(0, 0%, 33%); /* Light gray */
    transition: background-color 0.3s ease; /* Smooth transition */
  }
`;

export default function LearnMoreButton({ href, target, className }) {
  console.log(href);
  return (
    <Root href={`/instruments/${href}`} className={className} target={target}>
      Learn More
    </Root>
  );
}

LearnMoreButton.defaultProps = {
  target: "_self",
};
