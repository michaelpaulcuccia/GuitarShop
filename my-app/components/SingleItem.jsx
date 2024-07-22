"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import SlashPrice from "./Text/SlashPrice";

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px black solid;
  padding: 24px 32px;
`;

export default function DataReturn() {
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
    <ComponentWrapper>
      {data.map((item, i) => (
        <div key={i}>
          <h1>
            {item.brand} {item.modelType}
          </h1>
          <SlashPrice price={item.price} addOn={100} />
          <p>${item.price}</p>
          <Image
            src={`${item.images}`}
            alt={`${item.brand}`}
            width={607.5}
            height={492}
            //layout="responsive"
          />
        </div>
      ))}
    </ComponentWrapper>
  );
}
