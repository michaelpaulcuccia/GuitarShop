import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Item from "./Item";
import { mobileBreakpoint } from "../constants";

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin: 60px 24px;
  flex-wrap: wrap;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    margin: 30px 16px;
  }
`;

export default function OtherItemsContainer() {
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
    <>
      <h3>Check out these other items</h3>
      <Root>
        {data.map((item, i) => (
          <Item
            key={i}
            brand={item.brand}
            modelType={item.modelType}
            numberOfStrings={item.numberOfStrings}
            isBass={item.isBass}
            stars={item.stars}
            addOn={item.addOn}
            price={item.price}
            addOnAmount={item.addOnAmount}
            images={item.images}
            _id={item._id}
          />
        ))}
      </Root>
    </>
  );
}
