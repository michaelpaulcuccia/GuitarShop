import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Item from "./Item";

const Root = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
`;

export default function OtherItemsContainer({ filterType }) {
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

        if (filterType && filterType !== "") {
          if (filterType === "bass") {
            const onlyBass = result.filter((item) => item.isBass === true);
            setData(onlyBass);
          } else if (filterType === "guitar") {
            const onlyGuitars = result.filter((item) => item.isBass === false);
            setData(onlyGuitars);
          }
        } else {
          setData(result);
        }
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
  );
}
