'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { CiUser } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { mobileBreakpoint } from '../constants';

const Root = styled.div`
  background-color: #FFC72C;
  color: black;
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
  padding-left: 12px;
`;

const NavLinks = styled(Link)`
  text-decoration: none;
  padding-right: 12px;
  font-size: 18px;
  color: inherit;
  cursor: pointer;

  &:hover {
    font-style: italic;
    font-weight: 600;
  }

  @media (max-width: ${mobileBreakpoint}) {
    padding: 1.75px 0;
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
      <MainWrapperDesktop>
          <LeftSideLinks>
            <NavLinks href='/'>Tremelo</NavLinks>
            <NavLinks href='/'>Home</NavLinks>
            <NavLinks href='/'>Instruments</NavLinks>
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
      {/* MOBILE */}
      <MainWrapperMobile>
          <MobileNavContainer>
            {
              !mobileNavOpen && 
              <MobileTitleHide>
                <NavLinks href='/'>Tremelo</NavLinks>
              </MobileTitleHide>
            }
            <MobileMenuButtonContainer onClick={handleMobileNav}>
              <CiMenuBurger />
            </MobileMenuButtonContainer>
            {
              mobileNavOpen && 
              <>
                <NavLinks href='/'>Tremelo</NavLinks>
                <NavLinks href='/'>Home</NavLinks>
                <NavLinks href='/'>Instruments</NavLinks>
                <NavLinks href='/'>Add Instruments</NavLinks>
                <NavLinks href='/'>Login or Register</NavLinks>
                <IconContainer>
                  <div><CiBellOn size="24px" /></div>
                  <div><CiUser size="24px" /></div>
                </IconContainer>
              </>
            }
          </MobileNavContainer>
      </MainWrapperMobile>
    </Root>
  )
}
