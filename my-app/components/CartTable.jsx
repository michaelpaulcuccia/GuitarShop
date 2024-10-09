"use client";
import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";
import { mobileBreakpoint } from "../constants";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tbody {
    tr {
      &:nth-child(even) {
        background-color: #f9f9f9;
      }
    }
  }
`;

const Th = styled.th`
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  border-bottom: 2px solid #ddd;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 16px;
    padding: 8px;
  }
`;

const Td = styled.td`
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 12px;
    padding: 8px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 14px;
    padding-right: 8px;
  }

  .items {
    margin-right: 24px;

    @media (max-width: ${mobileBreakpoint}) {
      margin-right: 12px;
    }
  }

  .price {
    span {
      font-weight: bold;
    }
  }
`;

//TODO: HELPERS
/*
  Handle more than one of the same item in "Qty" field and "Total Price"
*/

export default function CartTable({ items }) {
  const { contextUser, removeItemFromCart } = useContext(UserContext);

  const handleDelete = (itemID) => {
    //update session
    const index = contextUser.cartItems.findIndex(
      (item) => item._id === itemID
    );
    if (index !== -1) {
      // Remove the item from the cartItems array
      contextUser.cartItems.splice(index, 1);
      // Save updated user data back to sessionStorage
      const updatedSerializedData = JSON.stringify(contextUser);
      window.sessionStorage.setItem("userData", updatedSerializedData);
    }
    //update context
    removeItemFromCart(items, itemID);
  };

  const totalPrice = items.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0); // Initial value is 0

  const totalPriceFixed = totalPrice.toFixed(2);

  return (
    <>
      <Table>
        <thead>
          <tr>
            <Th>Item</Th>
            <Th>Item Price</Th>
            <Th>Total Price</Th>
            <Th>Delete Item</Th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <Td>
                {item.brand} {item.modelType}
              </Td>
              <Td>{item.price}</Td>
              <Td>${item.price}</Td>
              <Td onClick={() => handleDelete(item._id)}>
                <FaRegTrashAlt />
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PriceContainer>
        <div className="items">Items: {items.length}</div>
        <div className="price">
          Total: <span>${totalPriceFixed}</span>
        </div>
      </PriceContainer>
    </>
  );
}
