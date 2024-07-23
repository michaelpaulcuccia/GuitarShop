"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import ItemHeadline from "./Text/ItemHeadline";
import SlashPrice from "./Text/SlashPrice";
import Price from "./Text/Price";
import StarHandler from "./StarHandler";
import { IoStar, IoStarHalf } from "react-icons/io5";

const ItemContainer = styled.div`
  display: flex;
  border: 1px black solid;
  padding: 24px 32px;
`;

const TitlePriceImageContainer = styled.div`
  display: inline-block;
`;

const DescriptionContainer = styled.div``;

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
        setData(result);
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
      <TitlePriceImageContainer>
        {data.map((item, i) => (
          <div key={i}>
            <ItemHeadline>
              {item.brand} {item.modelType}
            </ItemHeadline>
            <p style={{ marginBottom: "8px" }}>
              {item.numberOfStrings} string{" "}
              {item.isBass === true ? "bass guitar" : "gutiar"}
            </p>
            <StarHandler rating={item.stars} />
            <SlashPrice price={item.price} addOn={100} />
            <Price>{item.price}</Price>
            <Image
              src={`${item.images}`}
              alt={`${item.brand}`}
              width={486}
              height={394}
            />
          </div>
        ))}
      </TitlePriceImageContainer>
      <DescriptionContainer>
        {data.map((item, i) => (
          <div key={i}>{item.description}</div>
        ))}
      </DescriptionContainer>
    </ItemContainer>
  );
}
