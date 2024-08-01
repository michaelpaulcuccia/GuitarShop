"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import ItemHeadline from "./Text/ItemHeadline";
import SlashPrice from "./Text/SlashPrice";
import Price from "./Text/Price";
import StarHandler from "./StarHandler";
import FinanceShipCustomerWarranty from "./Text/FinanceShipCustomerWarranty";
import LearnMoreButton from "./LearnMoreButton";
import { mobileBreakpoint } from "../constants";

const ItemContainer = styled.div`
  display: flex;
  align-content: center;
  padding: 48px 32px;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;

  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
    margin-bottom: 18px;
  }
`;

const TitlePriceImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
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
        //gets one item using hardcoded ID, TODO: set up "isFeaturedItem" in database
        const hardCodedId = "66a120c6361d152c92b3542b";
        const item = result.filter((id) => id._id == hardCodedId);
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
    <ItemContainer>
      <DescriptionContainer>
        <ItemHeadline>
          Rock Your World with the Ultimate Bass Guitar Sale! 🎸
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
        <FinanceShipCustomerWarranty price={data[0].price} />
      </DescriptionContainer>
      <div>
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
            <Image
              src={`${item.images}`}
              alt={`${item.brand}`}
              width={486}
              height={394}
              style={{ marginTop: "12px" }}
            />
            <LearnMoreButton href={item._id} />
          </TitlePriceImageContainer>
        ))}
      </div>
    </ItemContainer>
  );
}
