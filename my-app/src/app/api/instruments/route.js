export const GET = async (req) => {
  try {
    return new Response("Hello World", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Problem!", { status: 500 });
  }
};
