import connectDB from "../../../../config/database";

export const GET = async (req) => {
  try {
    await connectDB();
    return new Response(JSON.stringify({ message: "Hello!" }, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new Response("Error found in app/api/instruments/route.js", {
      status: 500,
    });
  }
};
