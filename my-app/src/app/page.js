"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Root = styled.div``;

const getInstruments = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/instruments`
    );

    if (!res.ok) {
      throw new Error("failed to get data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const Home = async () => {
  const instruments = await getInstruments();
  //console.log(instruments);

  return (
    <Root>
      <h1>home</h1>
      {instruments.map((item, i) => (
        <div key={i}>
          <h2>
            {item.brand} {item.modelType}
          </h2>
          <Image
            src={`${item.images}`}
            alt={`${item.brand}`}
            width={775}
            height={750}
          />
        </div>
      ))}
    </Root>
  );
};

export default Home;
