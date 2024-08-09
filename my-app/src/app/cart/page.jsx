"use client";
import React from "react";
import styled from "styled-components";
import CartTable from "../../../components/CartTable";

const TableContainer = styled.div`
  margin: 32px auto;
  width: 70%;
`;

export default function page() {
  return (
    <div>
      <TableContainer>
        <CartTable />
      </TableContainer>
    </div>
  );
}
