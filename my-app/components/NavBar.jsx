'use client';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { CiUser } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { mobileBreakpoint } from '../constants';


const Root = styled.div`
  background-color: #FFC72C;
  color: black;
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

const LeftSideLinks = styled.div`
  display: flex;
  padding-left: 12px;

  @media (max-width: ${mobileBreakpoint}) {
    padding-left: 0;
    flex-direction: column;
    align-items: center;
  }
`;

const NavLinks = styled(Link)`
  text-decoration: none;
  padding-right: 12px;
  font-size: 18px;
  color: inherit;
  cursor: pointer;

  @media (max-width: ${mobileBreakpoint}) {
    padding-right: 0;
    font-size: 16px;
  }

  &:hover {
    font-style: italic;
    font-weight: 600;
  }
`;

const RightSideUser = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 12px;

  @media (max-width: ${mobileBreakpoint}) {
    padding-right: 0;
    flex-direction: column;
    align-items: center;
  }

`;

const IconContainer = styled.div`
  display: flex;
`;

export default function NavBar() {
  return (
    <Root>
      <MainWrapper>
        <LeftSideLinks>
          <NavLinks href='/'>Tremelo</NavLinks>
          <NavLinks href='/'>Home</NavLinks>
          <NavLinks href='/'>Instruments</NavLinks>
          <NavLinks href='/'>Add Instruments</NavLinks>
        </LeftSideLinks>
        <RightSideUser>
          <NavLinks href='/'>Login or Register</NavLinks>
          <IconContainer>
            <div><CiBellOn /></div>
            <div><CiUser /></div>
          </IconContainer>
        </RightSideUser>
      </MainWrapper>
    </Root>
  )
}
