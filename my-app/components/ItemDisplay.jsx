import React, { useContext } from "react";
import styled from "styled-components";
import Image from "next/image";
import UserContext from "../context/UserContext";
import ItemHeadline from "./Text/ItemHeadline";
import StarHandler from "./StarHandler";
import Price from "./Text/Price";
import SlashPrice from "./Text/SlashPrice";
import { mobileBreakpoint } from "../constants";
import Financing from "./Text/FinanceShipCustomerWarranty";

const textShrink = "1330px";

const Root = styled.div`
  padding: 48px 36px 30px 36px;

  .desktop-image {
    display: block;
    @media (max-width: ${mobileBreakpoint}) {
      display: none;
    }
  }

  .mobile-image {
    display: none;
    @media (max-width: ${mobileBreakpoint}) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

const FlexOne = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageSide = styled.div`
  @media (max-width: ${mobileBreakpoint}) {
    display: flex;
    justify-content: center;
  }
`;

const ButtonWrapper = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
`;

const MyButton = styled.div`
  background: gray;
  color: white;
  padding: 8px 25px;
  width: 30%;
  border-radius: 50px;
  transition: background 0.3s ease;
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    background-color: hsl(0, 0%, 33%);
    transition: background-color 0.3s ease;
  }

  @media (max-width: ${mobileBreakpoint}) {
    display: none;
  }
`;

const MobileButton = styled(MyButton)`
  @media (max-width: ${mobileBreakpoint}) {
    display: block;
    width: 60%;
    margin: 0 auto;
  }
`;

const ContentSide = styled.div`
  margin-left: 30px;
  padding-top: 20px;

  @media (max-width: ${mobileBreakpoint}) {
    margin: 30px 12px 18px 12px;
    padding-top: 0;
  }
`;

const ScriptContainer = styled.div`
  margin-top: 18px;
  font-size: 20px;
  line-height: 24px;
  padding-right: 8px;

  @media (max-width: ${textShrink}) {
    font-size: 18px;
    line-height: 20px;
  }
`;

export default function ItemDisplay({
  img,
  brand,
  modelType,
  numberOfStrings,
  isBass,
  stars,
  addOn,
  price,
  addOnAmount,
  description,
  numberAvailable,
  _id,
}) {
  const { contextUser, addItemToCart } = useContext(UserContext);

  const handleAddToCart = () => {
    if (contextUser?.username !== "") {
      //Ensure that cartItems is defined as an array, even if it's empty
      const cartItems = contextUser.cartItems || [];

      //Calculate the total number of this item in the cart based on its _id
      const totalQuantityInCart = cartItems
        .filter((item) => item._id === _id)
        .reduce((total, item) => total + (item.quantity || 1), 0);

      // Check if adding another item would exceed the number available
      if (totalQuantityInCart < numberAvailable) {
        // Create the new item to add or update
        const newItem = {
          brand: brand,
          modelType: modelType,
          price: price,
          numberAvailable: numberAvailable,
          _id: _id,
          quantity: 1, // Default quantity for a new item being added
        };

        // Retrieve the current user data from sessionStorage and update
        const storedData = window.sessionStorage.getItem("userData");
        let userData = { cartItems: [] }; // Default value in case there's no data

        if (storedData) {
          userData = JSON.parse(storedData);
        }

        // Check if the item already exists in the cart
        const existingCartItemIndex = userData.cartItems.findIndex(
          (item) => item._id === _id
        );

        if (existingCartItemIndex >= 0) {
          //If the item exists, increment its quantity
          userData.cartItems[existingCartItemIndex].quantity += 1;
        } else {
          //If it doesn't exist, add the new item to the cart
          userData.cartItems.push(newItem);
        }

        const updatedSerializedData = JSON.stringify(userData);
        window.sessionStorage.setItem("userData", updatedSerializedData);

        addItemToCart(newItem);

        window.alert(`${brand} ${modelType} added to cart!`);
      } else {
        window.alert("There's no more of this item available.");
      }
    } else {
      window.alert("You must be logged in to shop!");
    }
  };

  return (
    <Root>
      <FlexOne>
        <ImageSide>
          <div className="desktop-image">
            <Image
              src={img[0]}
              alt={`${brand}`}
              width={486}
              height={394}
              style={{ marginTop: "12px" }}
            />
          </div>
          <div className="mobile-image">
            <Image
              src={img[0]}
              alt={`${brand}`}
              width={263} //273
              height={224} //197
              style={{ marginBottom: "8px" }}
            />
            <MobileButton onClick={handleAddToCart} as="button">
              Add To Cart
            </MobileButton>
          </div>
          <ButtonWrapper>
            <MyButton onClick={handleAddToCart} as="button">
              Add To Cart
            </MyButton>
          </ButtonWrapper>
        </ImageSide>
        <ContentSide>
          <ItemHeadline>
            {brand} {modelType}
          </ItemHeadline>
          <p style={{ marginBottom: "8px" }}>
            {numberOfStrings} string{" "}
            {isBass === true ? "bass guitar" : "gutiar"}
          </p>
          <StarHandler stars={stars} />
          {addOn && <SlashPrice price={price} addOn={addOnAmount} />}
          <Price>{price}</Price>
          <p>{numberAvailable} left in stock!</p>
          <ScriptContainer>{description}</ScriptContainer>
          <Financing price={price} />
        </ContentSide>
      </FlexOne>
    </Root>
  );
}
