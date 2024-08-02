import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Item from "./Item";
import { mobileBreakpoint } from "../constants";
import LearnMoreButton from "./LearnMoreButton";

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

const Overlay = styled.div`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(211, 211, 211, 0.7); /* Light gray with opacity */
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1; /* Ensure the overlay appears above the content */
    pointer-events: none; /* Prevent interaction issues */

    @media (max-width: ${mobileBreakpoint}) {
      height: 97.7%;
    }
  }

  &:hover::before {
    opacity: 1; /* Show the overlay on hover */
  }

  * {
    position: relative;
  }

  .learnMore {
    display: none;
  }

  &:hover {
    .learnMore {
      display: flex;
      position: absolute;
      width: 100%;
      top: 50%;
      left: 75%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }
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
          <Overlay>
            <div className="learnMore">
              <LearnMoreButton href={item._id} />
            </div>
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
          </Overlay>
        ))}
      </Root>
    </>
  );
}
