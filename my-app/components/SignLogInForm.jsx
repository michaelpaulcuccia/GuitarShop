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

  input {
    padding: 6px 12px;
  }
`;

const MyButton = styled.input`
  margin-top: 12px;
  padding: 8px 12px;
  border-radius: 16px;
  border: none;
  color: white;
  background: #1877f2;

  &:hover {
    background: #166fe5;
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
      cartItems: [], // Initialize cartItems as an empty array
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
          <input
            type="text"
            value={inputUserName}
            onChange={(event) => setInputUserName(event.target.value)}
            minLength={2}
            required
            placeholder="User Name"
          />
        </ItemContainer>
        <ItemContainer>
          <input
            type="email"
            value={inputUserEmail}
            onChange={(event) => setInputUserEmail(event.target.value)}
            required
            placeholder="Email"
          />
        </ItemContainer>
        <ItemContainer className="shift-mobile">
          <input
            type="password"
            minLength={8}
            required
            value={inputPass}
            onChange={(event) => setInputPass(event.target.value)}
            placeholder="Password"
          />
        </ItemContainer>
        <MyButton type="submit" value="Sign Up" />
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
