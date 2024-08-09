"use client";
import React from "react";
import SignLogInForm from "../../../../components/SignLogInForm";

export default function page() {
  return (
    <div>
      <SignLogInForm showLinkToSignUp={false} />
    </div>
  );
}
