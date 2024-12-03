import get_Contest_Data from "../handler/contest_handler.ts";

Deno.serve (async (req) => {
  if(req.method==="GET"){
    return await get_Contest_Data(req);
  }

  return new Response(
    JSON.stringify("Wrong method is used"),
    {status:400,headers: {"Content-Type":"application/json"}}
  )
});