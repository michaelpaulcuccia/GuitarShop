"use client";
import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../../context/UserContext";
import CartTable from "../../../components/CartTable";
import { mobileBreakpoint } from "../../../constants";

const TableContainer = styled.div`
  margin: 32px auto;
  width: 70%;

  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
  }
`;

export default function page() {
  const { contextUser } = useContext(UserContext);

  return (
    <div>
      {/* IF NOT LOGGED IN */}
      {/* IF LOGGED IN BUT CART EMPTY */}
      {/* IF LOGGED IN, WITH CART ITEMS */}
      <TableContainer>
        {contextUser ? (
          contextUser.username !== "" ? (
            contextUser.cartItems.length === 0 ? (
              <div>There are no items in your cart</div>
            ) : (
              <CartTable items={contextUser.cartItems} />
            )
          ) : (
            <div>You must be logged in</div>
          )
        ) : (
          <div>You must be logged in</div>
        )}
      </TableContainer>
    </div>
  );
}

//           <CartTable items={contextUser.cartItems} />
