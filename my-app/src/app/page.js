"use client";
import React from "react";
import styled from "styled-components";
import Hero from "../../components/Hero";
import OtherItemsContainer from "../../components/OtherItemsContainer";
import { mobileBreakpoint } from "../../constants";
import SaleBar from "../../components/SaleBar";

const HeroTextContainer = styled.div`
  margin: 36px 0;
  display: flex;
  justify-content: center;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: 0.75px;

  @media (max-width: ${mobileBreakpoint}) {
    text-align: center;
    font-size: 36px;
    line-height: 36px;
  }
`;

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
      <HeroTextContainer>Find Your Next Guitar Right Here!</HeroTextContainer>
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
