"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function DataReturn() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getInstruments() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_DOMAIN}/instruments`
        );

        if (!response.ok) {
          throw new Error("failed to get data");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getInstruments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle unexpected data format
  if (!Array.isArray(data)) {
    return <div>Data is not available or not an array</div>;
  }

  return (
    <>
      {data.map((item, i) => (
        <div key={i}>
          <h2>
            {item.brand} {item.modelType}
          </h2>
          <Image
            src={`${item.images}`}
            alt={`${item.brand}`}
            width={775}
            height={750}
          />
        </div>
      ))}
    </>
  );
}
