"use client";
import React from "react";
import styled from "styled-components";
import FeaturedItem from "../../components/FeaturedItem";

const Root = styled.div``;

const Home = async () => {
  return (
    <Root>
      <h1>Our featured item</h1>
      <FeaturedItem />
    </Root>
  );
};

export default Home;
