"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function page() {
  const { id } = useParams();
  const [instrument, setInstrument] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getInstrumentData = async () => {
      if (!id) return;
      try {
        const instrument = await fetchSingleItem(id);
        setInstrument(instrument);
      } catch (error) {
        console.error("error fetching");
      } finally {
        setLoading(false);
      }
    };

    if (instrument === null) {
      getInstrumentData();
    }
  }, [id, instrument]);

  async function fetchSingleItem(id) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/instruments/${id}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      return res.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  if (!instrument && !loading) {
    return <h1>Instrument Not Found</h1>;
  }

  return <>{!loading && instrument && <>{instrument.brand}</>}</>;
}
