import React from "react";
import styled from "styled-components";
import { CiCreditCard2 } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const ItemWrapper = styled.div`
  margin-bottom: 18px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;

  h4 {
    margin-left: 12px;
  }
`;

const SubTextContainer = styled.div`
  font-size: 14px;
  font-height: 14px;
  font-weight: 600;
  margin-top: 8px;
`;

export default function Financing({ price }) {
  const financingPayments = (arg) => {
    let priceDivBy48 = arg / 48;
    let rounded = Math.ceil(priceDivBy48);
    console.log(rounded);
    return rounded;
  };

  const payments = financingPayments(price);

  return (
    <>
      <ItemWrapper>
        <Row>
          <CiCreditCard2 size={32} />
          <h4>SPECIAL INTEREST FREE FINANCING AVAILABLE</h4>
        </Row>
        <SubTextContainer>
          ${payments} a month with 48-month financing
        </SubTextContainer>
      </ItemWrapper>
      <ItemWrapper>
        <Row>
          <LiaShippingFastSolid size={32} />
          <h4>Free Shipping in the US</h4>
        </Row>
        <SubTextContainer>International Shipping Available</SubTextContainer>
      </ItemWrapper>
      <ItemWrapper>
        <Row>
          <RiCustomerService2Line size={32} />
          <h4>Friendly Customer Service to Answer All Questions</h4>
        </Row>
      </ItemWrapper>
      <ItemWrapper>
        <Row>
          <IoShieldCheckmarkOutline size={32} />
          <h4>Warranty Plans Available</h4>
        </Row>
        <SubTextContainer>Get additional coverage through us</SubTextContainer>
      </ItemWrapper>
    </>
  );
}
