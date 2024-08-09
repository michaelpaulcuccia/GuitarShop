"use client";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import UserContext from "../context/UserContext";
import styled from "styled-components";

const Root = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemContainer = styled.div`
  margin: 6px;
  display; flex;
  
  label {
    margin-right: 12px;
  }
`;

export default function SignUp() {
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
    <>
      <Root onSubmit={handleSubmit}>
        <ItemContainer>
          <label htmlFor="inputUserName">User Name</label>
          <input
            type="text"
            value={inputUserName}
            onChange={(event) => setInputUserName(event.target.value)}
          />
        </ItemContainer>
        <ItemContainer>
          <label htmlFor="inputUserEmail">User Email</label>
          <input
            type="email"
            value={inputUserEmail}
            onChange={(event) => setInputUserEmail(event.target.value)}
          />
        </ItemContainer>
        <ItemContainer>
          <label htmlFor="inputPass">Password (must be 8 characters)</label>
          <input
            type="password"
            minLength={8}
            required
            value={inputPass}
            onChange={(event) => setInputPass(event.target.value)}
          />
        </ItemContainer>
        <input type="submit" value="Sign Up" />
      </Root>
    </>
  );
}
