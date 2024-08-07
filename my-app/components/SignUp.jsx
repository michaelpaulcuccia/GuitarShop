"use client";
import React, { useState, useContext } from "react";
//import { useRouter } from 'next/navigation';
import UserContext from "../context/UserContext";
import User from "../models/User";
import connectDB from "../config/database";
import styled from "styled-components";

export default function SignUp() {
  const { setContextUser } = useContext(UserContext);

  //const router = useRouter();

  const [inputUserName, setInputUserName] = useState("");
  const [inputUserEmail, setInputUserEmail] = useState("");
  const [inputPass, setInputPass] = useState("");

  async function signUpUser() {
    try {
      await connectDB();
      const userAlreadyExists = await User.findOne({ email: inputUserEmail });
      if (!userAlreadyExists) {
        await User.create({
          username: inputUserName,
          email: inputUserEmail,
          password: inputPass,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      //clears form
      setInputUserName("");
      setInputUserEmail("");
      setInputPass("");
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setContextUser({ inputUserName, inputUserEmail, inputPass });
    signUpUser();

    //router.push(`/users/${inputUserName}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputUserName">User Name</label>
          <input
            type="text"
            value={inputUserName}
            onChange={(event) => setInputUserName(event.target.value)}
          />
          <label htmlFor="inputUserEmail">User Email</label>
          <input
            type="email"
            value={inputUserEmail}
            onChange={(event) => setInputUserEmail(event.target.value)}
          />
          <label htmlFor="inputPass">Password (must be 8 characters)</label>
          <input
            type="password"
            minLength={8}
            required
            value={inputPass}
            onChange={(event) => setInputPass(event.target.value)}
          />
        </div>
        <input type="submit" value="Sign Up" />
      </form>
    </>
  );
}
