"use client";
import React from "react";
import styled from "styled-components";
import DataReturn from "../../components/DataReturn";

const Root = styled.div``;

const Home = async () => {
  return (
    <Root>
      <h1>home</h1>
      <DataReturn />
    </Root>
  );
};

export default Home;
