"use client";
import React from "react";
import styled from "styled-components";
import FeaturedItem from "../../components/FeaturedItem";
import OtherItemsContainer from "../../components/OtherItemsContainer";
import NewOtherItemsContainer from "../../components/NewOtherItemsContainer";

const Root = styled.div``;

const Home = () => {
  return (
    <Root>
      <h1>Our featured item</h1>
      <FeaturedItem />
      <OtherItemsContainer />
      <NewOtherItemsContainer />
    </Root>
  );
};

export default Home;
