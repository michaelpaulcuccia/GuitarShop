"use client";
import React from "react";
import styled from "styled-components";
import Hero from "../../components/Hero";
import OtherItemsContainer from "../../components/OtherItemsContainer";
import { mobileBreakpoint } from "../../constants";
import SaleBar from "../../components/SaleBar";

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
  }
`;

const BassHero = {
  headline: "Bass Sale!",
  subText: "Get these limited time savings",
  instrumentType: "bass",
  image: "/images/bass_hero.jpg",
};

const GuitarHero = {
  headline: "New Items!",
  subText: "Check out our new stock",
  instrumentType: "guitar",
  image: "/images/guitar_hero.jpg",
};

const Home = () => {
  return (
    <>
      <HeroContainer>
        <Hero
          headline={BassHero.headline}
          subText={BassHero.subText}
          instrumentType={BassHero.instrumentType}
          image={BassHero.image}
        />
        <Hero
          headline={GuitarHero.headline}
          subText={GuitarHero.subText}
          instrumentType={GuitarHero.instrumentType}
          image={GuitarHero.image}
        />
      </HeroContainer>
      <SaleBar />
      <OtherItemsContainer />
    </>
  );
};

export default Home;
