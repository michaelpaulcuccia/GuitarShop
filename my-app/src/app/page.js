"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Root = styled.div`
  background-color: violet;
  color: black;
`;

export default function Home() {
  return <Root>
    <h1>hello world</h1>
    <div>
      <Link href="/instruments">go to instruments</Link>
    </div>
    </Root>;
}
