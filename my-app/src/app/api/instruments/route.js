import connectDB from "../../../../config/database";
import Instrument from "../../../../models/Instrument";

//ROUTE: /api/instruments
export const GET = async () => {
  try {
    await connectDB();
    const instruments = await Instrument.find({});
    return new Response(JSON.stringify(instruments));
  } catch (error) {
    console.log(error);
    return new Response("Error found in app/api/instruments/route.js", {
      status: 500,
    });
  }
};
