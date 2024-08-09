import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import UserContext from "../context/UserContext";
import Link from "next/link";
import { mobileBreakpoint } from "../constants";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`;

const ItemContainer = styled.div`
  margin: 6px;

  @media (max-width: ${mobileBreakpoint}) {
    display: flex;
    flex-direction: column;
  }

  .showMobile {
    display: none;

    @media (max-width: ${mobileBreakpoint}) {
      display: block;
    }
  }

  label {
    margin-right: 12px;
    @media (max-width: ${mobileBreakpoint}) {
    }
  }
`;

const NonMember = styled.div`
  margin-top: 18px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function SignLogInForm({ showLinkToSignUp }) {
  const { setContextUser } = useContext(UserContext);

  const router = useRouter();

  const [inputUserName, setInputUserName] = useState("");
  const [inputUserEmail, setInputUserEmail] = useState("");
  const [inputPass, setInputPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setContextUser({
      username: inputUserName,
      email: inputUserEmail,
      password: inputPass,
    });
    const userData = {
      inputUserName,
      inputUserEmail,
    };
    const serializedData = JSON.stringify(userData);
    window.sessionStorage.setItem("userData", serializedData);
    //clear form
    setInputUserName("");
    setInputUserEmail("");
    setInputPass("");
    router.push("/");
  };

  return (
    <Root>
      <FormContainer onSubmit={handleSubmit}>
        <ItemContainer>
          <label htmlFor="inputUserName">User Name</label>
          <input
            type="text"
            value={inputUserName}
            onChange={(event) => setInputUserName(event.target.value)}
            minLength={2}
            required
          />
        </ItemContainer>
        <ItemContainer>
          <label htmlFor="inputUserEmail">User Email</label>
          <input
            type="email"
            value={inputUserEmail}
            onChange={(event) => setInputUserEmail(event.target.value)}
            required
          />
        </ItemContainer>
        <ItemContainer className="shift-mobile">
          <label htmlFor="inputPass">
            Password <br className="showMobile" />
            (must be 8 characters)
          </label>
          <input
            type="password"
            minLength={8}
            required
            value={inputPass}
            onChange={(event) => setInputPass(event.target.value)}
          />
        </ItemContainer>
        <input style={{ marginTop: "12px" }} type="submit" value="Sign Up" />
      </FormContainer>
      {showLinkToSignUp && (
        <NonMember>
          If not a memember, please{" "}
          <StyledLink href="/profile/signup">sign up</StyledLink>
        </NonMember>
      )}
    </Root>
  );
}
