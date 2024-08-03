"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import ItemHeadline from "./Text/ItemHeadline";

import FinanceShipCustomerWarranty from "./Text/FinanceShipCustomerWarranty";
import { mobileBreakpoint } from "../constants";

//SAVE THIS PAGE

const Root = styled.div`
  display: flex;
  align-content: center;
  padding: 48px 32px;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
  }

  .desktop-image {
    display: block;
    @media (max-width: ${mobileBreakpoint}) {
      display: none;
    }
  }

  .mobile-image {
    display: none;
    @media (max-width: ${mobileBreakpoint}) {
      display: block;
    }
  }
`;

const MainText = styled.div`
  width: 40%;
  padding-right: 24px;

  p {
    font-size: 22px;
    line-height: 22px;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 24px;
  width: 30%;

  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
    margin-bottom: 18px;
  }
`;

export default function FeaturedItem() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getInstruments() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_DOMAIN}/instruments`
        );

        if (!response.ok) {
          throw new Error("failed to get data");
        }
        const result = await response.json();

        //FIND item with is_featured
        const item = result.filter((item) => item.is_featured == true);
        setData(item);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getInstruments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle unexpected data format
  if (!Array.isArray(data)) {
    return <div>Data is not available or not an array</div>;
  }

  return (
    <Root>
      <MainText>
        <ItemHeadline>
          <span>Rock Your World </span> <br />
          with the Ultimate Bass Guitar Sale! 🎸
        </ItemHeadline>
        <br />
        <p>
          Looking to lay down some groovy bass lines? Our featured{" "}
          {data[0].brand} {data[0].modelType} is just what you need!
        </p>
        <br />
        <p>
          Perfect for both beginners and seasoned pros, this bass guitar boasts
          rich, deep tones and exceptional playability. Crafted with precision,
          it offers a sleek design and durable build, ensuring you’re ready to
          rock for years to come.
        </p>
        <br />
      </MainText>
      <div>
        <div className="desktop-image">
          <Image
            src={`${data[0].images[0]}`}
            alt={`${data[0].brand}`}
            width={426}
            height={334}
            style={{ marginTop: "12px" }}
          />
        </div>
      </div>
      <OptionsContainer>
        <FinanceShipCustomerWarranty price={data[0].price} />
      </OptionsContainer>
      {/* <div>
        {data.map((item, i) => (
          <TitlePriceImageContainer key={i}>
            <ItemHeadline>
              {item.brand} {item.modelType}
            </ItemHeadline>
            <p style={{ marginBottom: "8px" }}>
              {item.numberOfStrings} string{" "}
              {item.isBass === true ? "bass guitar" : "gutiar"}
            </p>
            <StarHandler stars={item.stars} />
            {item.addOn && (
              <SlashPrice price={item.price} addOn={item.addOnAmount} />
            )}
            <Price>{item.price}</Price>
            <div className="desktop-image">
              <Image
                src={`${item.images}`}
                alt={`${item.brand}`}
                width={486}
                height={394}
                style={{ marginTop: "12px" }}
              />
            </div>
            <div className="mobile-image">
              <Image
                src={`${item.images}`}
                alt={`${item.brand}`}
                width={263} //273
                height={224} //197
                style={{ marginBottom: "8px" }}
              />
            </div>
            <LearnMoreButton href={item._id} />
          </TitlePriceImageContainer>
        ))}
      </div> */}
    </Root>
  );
}
