import React from "react";
import { IoStar, IoStarHalf } from "react-icons/io5";

//ABSOLUTELY could use a refactor but I had a whole lot of trouble with the "number" I was getting back from MongoDB

export default function StarHandler({ stars }) {
  return (
    <div>
      {stars == 0.5 ? (
        <>
          <IoStarHalf color="gold" />
        </>
      ) : stars == 1 ? (
        <>
          <IoStar color="gold" />
        </>
      ) : stars == 1.5 ? (
        <>
          <IoStar color="gold" /> <IoStarHalf color="gold" />
        </>
      ) : stars == 2 ? (
        <>
          <IoStar color="gold" /> <IoStar color="gold" />
        </>
      ) : stars == 2.5 ? (
        <>
          <IoStar color="gold" /> <IoStar color="gold" />{" "}
          <IoStarHalf color="gold" />
        </>
      ) : stars == 3 ? (
        <>
          <IoStar color="gold" /> <IoStar color="gold" />{" "}
          <IoStar color="gold" />
        </>
      ) : stars == 3.5 ? (
        <>
          <IoStar color="gold" /> <IoStar color="gold" />{" "}
          <IoStar color="gold" /> <IoStarHalf color="gold" />
        </>
      ) : stars == 4 ? (
        <>
          <IoStar color="gold" /> <IoStar color="gold" />{" "}
          <IoStar color="gold" /> <IoStar color="gold" />
        </>
      ) : stars == 4.5 ? (
        <>
          <IoStar color="gold" /> <IoStar color="gold" />{" "}
          <IoStar color="gold" /> <IoStar color="gold" />{" "}
          <IoStarHalf color="gold" />
        </>
      ) : (
        <>
          <IoStar color="gold" /> <IoStar color="gold" />{" "}
          <IoStar color="gold" /> <IoStar color="gold" />{" "}
          <IoStar color="gold" />
        </>
      )}
    </div>
  );
}
