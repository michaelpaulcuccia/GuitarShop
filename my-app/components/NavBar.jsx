"use client";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import UserContext from "../context/UserContext";
import { Dancing_Script } from "next/font/google";
import styled, { keyframes } from "styled-components";
import Container from "./Container";
import { CiUser } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { mobileBreakpoint } from "../constants";

const dancing_script = Dancing_Script({ weight: ["700"], subsets: ["latin"] });

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Root = styled.div``;

const Line = styled.div`
  border-top: 1px solid rgb(224, 224, 224);
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

const UserContainer = styled.div`
  margin-right: 6px;
`;

const IconContainer = styled.div`
  display: flex;
  margin-right: 6px;

  @media (max-width: ${mobileBreakpoint}) {
    padding: 8px 0;
  }
`;

const LogoutContainer = styled.div`
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

const MainWrapperMobile = styled.div`
  display: none;

  @media (max-width: ${mobileBreakpoint}) {
    display: flex;
    margin: 0 8px;
  }
`;

const MobileMenuButtonContainer = styled.div`
  padding-top: 8px;
  padding-bottom: 6px;
`;

const MobileNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

const OpenMobileNavContainer = styled(MobileNavContainer)`
  animation: ${fadeIn} 0.5s ease;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const MobileTitleHide = styled.div`
  padding-top: 8px;
`;

export default function NavBar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { contextUser } = useContext(UserContext);
  const router = useRouter();

  const handleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const handleOpenMobileClick = () => {
    console.log("click");
    setMobileNavOpen(!mobileNavOpen);
  };

  const handleLogout = () => {
    //delete session
    sessionStorage.clear();
    router.push("/");
  };

  return (
    <Root>
      <Line />
      <Container>
        <MainWrapperDesktop>
          <LeftSideLinks>
            <NavLinks
              href="/"
              className={dancing_script.className}
              style={{ fontSize: "34px" }}
            >
              Tremelo
            </NavLinks>
            <NavLinks href="/instruments">View All Instruments</NavLinks>
            <NavLinks href="/instruments/bass">Bass Guitars</NavLinks>
            <NavLinks href="/instruments/guitar">Electric Guitars</NavLinks>
          </LeftSideLinks>
          {/* <RightSideUser> */}
          {contextUser.username !== "" ? (
            <RightSideUser>
              <UserContainer>Welcome {contextUser.username}</UserContainer>
              <IconContainer>
                <div>
                  <CiBellOn size="24px" />
                </div>
                <div>
                  <CiUser size="24px" />
                </div>
              </IconContainer>
              <NavLinks href="/cart">Cart</NavLinks>
              <LogoutContainer onClick={handleLogout}>Logout</LogoutContainer>
            </RightSideUser>
          ) : (
            <RightSideUser>
              <NavLinks href="/profile/login">Login or Register</NavLinks>
            </RightSideUser>
          )}
          {/* </RightSideUser> */}
        </MainWrapperDesktop>
      </Container>
      <Line />
      {/* MOBILE */}
      <Container>
        <MainWrapperMobile>
          <MobileNavContainer>
            {!mobileNavOpen && (
              <MobileTitleHide>
                <NavLinks
                  href="/"
                  className={dancing_script.className}
                  style={{ fontSize: "32px" }}
                >
                  Tremelo
                </NavLinks>
              </MobileTitleHide>
            )}
            <MobileMenuButtonContainer onClick={handleMobileNav}>
              {!mobileNavOpen && <CiMenuBurger style={{ fontSize: "22px" }} />}
            </MobileMenuButtonContainer>
            {mobileNavOpen && (
              <OpenMobileNavContainer onClick={handleOpenMobileClick}>
                <NavLinks
                  href="/"
                  className={dancing_script.className}
                  style={{ fontSize: "24px" }}
                >
                  Tremelo
                </NavLinks>
                <NavLinks href="/instruments">View All Instruments</NavLinks>
                <NavLinks href="/instruments/bass">Bass Guitars</NavLinks>
                <NavLinks href="/instruments/guitar">Electric Guitars</NavLinks>

                {contextUser.username !== "" ? (
                  <>
                    <UserContainer>
                      Welcome {contextUser.username}
                    </UserContainer>
                    <IconContainer>
                      <div>
                        <CiBellOn size="24px" />
                      </div>
                      <div>
                        <CiUser size="24px" />
                      </div>
                    </IconContainer>
                    <NavLinks href="/cart">Cart</NavLinks>
                    <LogoutContainer onClick={handleLogout}>
                      Logout
                    </LogoutContainer>
                  </>
                ) : (
                  <NavLinks href="/profile/login">Login or Register</NavLinks>
                )}
              </OpenMobileNavContainer>
            )}
          </MobileNavContainer>
        </MainWrapperMobile>
      </Container>
    </Root>
  );
}
