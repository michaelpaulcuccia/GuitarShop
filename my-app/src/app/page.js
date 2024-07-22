"use client";
import React from "react";
import styled from "styled-components";
import SingleItem from "../../components/SingleItem";

const Root = styled.div``;

const Home = async () => {
  return (
    <Root>
      <h1>home</h1>
      <SingleItem />
    </Root>
  );
};

export default Home;
