import React from "react";
import styled from "styled-components";
import Image from "next/image";
import SaleText from "./Text/SaleText";

const Root = styled.div`
  background: black;
  color: white;
  display: flex;
  padding: 18px;
  margin-top: 12px;
`;

export default function SaleBar() {
  return (
    <Root>
      <Image
        src="/images/fender.jpg"
        height={200}
        width={250}
        layout="intrinsic"
      />
      <SaleText headline="UP TO $200 OFF" text="SELECT FENDER BASS GUITARS" />

      <Image src="/images/gibson.jpg" height={200} width={250} />
      <SaleText
        headline="NEW ITEMS ! "
        text="CHECK OUT OUR STOCK OF GIBSON GUITARS"
      />
    </Root>
  );
}
