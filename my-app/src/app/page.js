"use client";
import React from "react";
import styled from "styled-components";
import FeaturedItem from "../../components/FeaturedItem";
import OtherItemsContainer from "../../components/OtherItemsContainer";

const Root = styled.div``;

const Home = () => {
  return (
    <Root>
      <h1>Our featured item</h1>
      <FeaturedItem />
      <OtherItemsContainer />
    </Root>
  );
};

export default Home;
