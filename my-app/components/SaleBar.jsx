import React from "react";
import styled from "styled-components";
import Image from "next/image";
import SaleText from "./Text/SaleText";
import { mobileBreakpoint } from "../constants";

const Root = styled.div`
  background: black;
  color: white;
  display: flex;
  justify-content: space-evenly;
  padding: 18px;
  margin-top: 12px;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    gap: 20px;
  }

  div {
    margin: 0 12px;
    display: flex;

    @media (max-width: ${mobileBreakpoint}) {
      flex-direction: column;
      align-items: center;
    }
  }

  .showMobile {
    display: none;

    @media (max-width: ${mobileBreakpoint}) {
      display: block;
      margin-top: 22px;
    }
  }
`;

export default function SaleBar() {
  return (
    <Root>
      <div>
        <Image
          src="/images/fender.jpg"
          height={200}
          width={250}
          layout="intrinsic"
        />
        {/* USING THIS SPACER BECAUSE IMAGES AREN'T THE SAME */}
        <div className="showMobile"></div>
        <SaleText headline="UP TO $200 OFF" text="SELECT FENDER BASS GUITARS" />
      </div>
      <div>
        <Image src="/images/gibson.jpg" height={140} width={250} />
        <SaleText
          headline="NEW ITEMS ! "
          text="CHECK OUT OUR STOCK OF GIBSON GUITARS"
        />
      </div>
    </Root>
  );
}
