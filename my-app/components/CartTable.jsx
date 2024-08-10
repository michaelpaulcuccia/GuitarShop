"use client";
import React from "react";
import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";

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
  font-size: 1.2em;
  font-weight: bold;
  padding: 10px;
  border-bottom: 2px solid #ddd;
`;

const Td = styled.td`
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const testData = [
  {
    item: "Fender Precision Bass, Dakota Red",
    price: "1099.99",
    qty: 1,
    totalPrice: "1099.99",
  },
  {
    item: "Silverton 1478",
    price: "499",
    qty: 2,
    totalPrice: "998",
  },
];

const PriceContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;

  .items {
    margin-right: 24px;
  }

  .price {
    span {
      font-weight: bold;
    }
  }
`;

//TODO: HELPERS
/*
  Items are getting overwritten in cart
  Handle more than one of the same item in "Qty" field and "Total Price"
  Make "Total" dynamic
  Handle Deleting an item
*/

export default function CartTable({ items }) {
  console.log(items);
  const handleDelete = () => {
    console.log("click");
  };

  const totalPrice = items.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0); // Initial value is 0

  return (
    <>
      <Table>
        <thead>
          <tr>
            <Th>Item</Th>
            <Th>Item Price</Th>
            <Th>Qty</Th>
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
              <Td>1</Td>
              <Td>${item.price}</Td>
              <Td onClick={handleDelete}>
                <FaRegTrashAlt />
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PriceContainer>
        <div className="items">Items: {items.length}</div>
        <div className="price">
          Total: <span>${totalPrice}</span>
        </div>
      </PriceContainer>
    </>
  );
}
