'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Dancing_Script } from 'next/font/google';
import styled, {keyframes } from 'styled-components';
import Container from './Container';
import { CiUser } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { mobileBreakpoint } from '../constants';

const dancing_script = Dancing_Script({ weight: ["700"], subsets: ["latin"] });

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Root = styled.div`
  color: black;
`;

const Line = styled.div`
  border-top: 1px solid rgb(224,224,224);
`;

const MainWrapperDesktop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;

  @media (max-width: ${mobileBreakpoint}) {
    display: none;
  }
`;

const LeftSideLinks = styled.div`
  display: flex;
  align-items: center;
  padding-left: 12px;
`;


const NavLinks = styled(Link)`
  text-decoration: none;
  padding-right: 22px;
  font-size: 18px;
  color: inherit;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  @media (max-width: ${mobileBreakpoint}) {
    padding: 8px 0;
  }
`;

const RightSideUser = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 12px;
`;

const IconContainer = styled.div`
  display: flex;

  @media (max-width: ${mobileBreakpoint}) {
    padding: 8px 0;
  }
`;

const MainWrapperMobile = styled.div`
  display: none;

  @media (max-width: ${mobileBreakpoint}) {
    display: flex;
    justify-content: center;
  }
`;

const MobileMenuButtonContainer = styled.div`
  padding-top: 8px;
  padding-bottom: 6px;
`;

const MobileNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OpenMobileNavContainer = styled(MobileNavContainer)`
  animation: ${fadeIn} 0.5s ease;
  height: 100vh;
`;

const MobileTitleHide = styled.div`
  padding-top: 8px;
`;
export default function NavBar() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  }

  return (
    <Root>
      <Line />
        <Container>
          <MainWrapperDesktop>
              <LeftSideLinks>
                <NavLinks href='/' className={dancing_script.className} style={{ fontSize: '34px'}}>Tremelo</NavLinks>
                <NavLinks href='/instruments'>Instruments</NavLinks>
                <NavLinks href='/'>Add Instruments</NavLinks>
              </LeftSideLinks>
              <RightSideUser>
                <NavLinks href='/'>Login or Register</NavLinks>
                <IconContainer>
                  <div><CiBellOn size="24px" /></div>
                  <div><CiUser size="24px" /></div>
                </IconContainer>
              </RightSideUser>
          </MainWrapperDesktop>
        </Container>
      <Line />
      {/* MOBILE */}
      <Container>
        <MainWrapperMobile>
            <MobileNavContainer>
              {
                !mobileNavOpen && 
                <MobileTitleHide>
                  <NavLinks href='/' className={dancing_script.className} style={{ fontSize:'32px'}}>Tremelo</NavLinks>
                </MobileTitleHide>
              }
              <MobileMenuButtonContainer onClick={handleMobileNav}>
                <CiMenuBurger />
              </MobileMenuButtonContainer>
              {
                mobileNavOpen && 
                <OpenMobileNavContainer>
                  <NavLinks href='/' className={dancing_script.className} style={{ fontSize:'24px'}}>Tremelo</NavLinks>
                  <NavLinks href='/instruments'>Instruments</NavLinks>
                  <NavLinks href='/'>Add Instruments</NavLinks>
                  <NavLinks href='/'>Login or Register</NavLinks>
                  <IconContainer>
                    <div><CiBellOn size="24px" /></div>
                    <div><CiUser size="24px" /></div>
                  </IconContainer>
                </OpenMobileNavContainer>
              }
            </MobileNavContainer>
        </MainWrapperMobile>
      </Container>
    </Root>
  )
}
