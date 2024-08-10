"use client";
import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../../context/UserContext";
import CartTable from "../../../components/CartTable";

const TableContainer = styled.div`
  margin: 32px auto;
  width: 70%;
`;

export default function page() {
  const { contextUser } = useContext(UserContext);
  const { cartItems } = contextUser;
  console.log(cartItems);
  return (
    <div>
      <TableContainer>
        {contextUser && contextUser.username !== "" ? (
          <CartTable items={contextUser.cartItems} />
        ) : (
          <div>you must be logged in to shop!</div>
        )}
      </TableContainer>
    </div>
  );
}
