"use client";
import React, { useState, useContext } from "react";
//import { useRouter } from 'next/navigation';
import UserContext from "../context/UserContext";
//import User from "../models/User";

export default function SignUp() {
  const { setContextUser } = useContext(UserContext);

  //const router = useRouter();

  const [inputUserName, setInputUserName] = useState("");
  const [inputUserEmail, setInputUserEmail] = useState("");
  const [inputPass, setInputPass] = useState("");

  async function signUpUser() {
    console.log("signUpUser function called");

    //get all users from API
    const allUsers = await fetch(
      process.env.NEXT_PUBLIC_API_DOMAIN + "/users/"
    );
    const result = await allUsers.json();
    const checkForExistingUser = result.filter(
      (item) => item.email === inputUserEmail
    );

    if (checkForExistingUser) {
      console.log("email exists");
    } else {
      try {
      } catch (error) {}
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setContextUser({ inputUserName, inputUserEmail, inputPass });
    signUpUser();
    //clears form
    setInputUserName("");
    setInputUserEmail("");
    setInputPass("");
    //router.push(`/users/${inputUserName}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="/api/users" method="POST">
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
