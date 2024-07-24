import connectDB from "../../../../../config/database";
import Instrument from "../../../../../models/Instrument";

//ROUTE: /api/instruments/:id
export const GET = async (request, { params }) => {
  try {
    await connectDB();
    const instrument = await Instrument.findById(params.id);

    if (!instrument) return new Response("Item not found", { status: 404 });

    return new Response(JSON.stringify(instrument));
  } catch (error) {
    console.log(error);
    return new Response("Error found in app/api/instruments/[id]/route.js", {
      status: 500,
    });
  }
};
