import connectDB from "../../../../config/database";
import User from "../../../../models/User";

//ROUTE: /api/users
export const GET = async () => {
  try {
    await connectDB();
    const users = await User.find({});
    return new Response(JSON.stringify(users));
  } catch (error) {
    console.log(error);
    return new Response("Error found in app/api/users/route.js", {
      status: 500,
    });
  }
};
