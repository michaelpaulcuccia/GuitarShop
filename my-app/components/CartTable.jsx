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

const TableComponent = () => (
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
        {testData.map((item, i) => (
          <tr key={i}>
            <Td>{item.item}</Td>
            <Td>{item.price}</Td>
            <Td>{item.qty}</Td>
            <Td>{item.totalPrice}</Td>
            <Td>
              <FaRegTrashAlt />
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
    <PriceContainer>
      <div className="items">Items: 3</div>
      <div className="price">
        Total: <span>$2097.99</span>
      </div>
    </PriceContainer>
  </>
);

export default TableComponent;

//Table Hydration Error: https://github.com/vercel/next.js/discussions/36754
//USE THIS
/*
  <table>
    <thead>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
    </tbody>
  </table>
*/
