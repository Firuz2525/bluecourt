// import { NextResponse } from "next/server";
// import fs from "fs";
// import path from "path";

// // This points to your data.json file
// const dbPath = path.join(process.cwd(), "data.json");
// console.log(dbPath);
// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const room = searchParams.get("room");
//   console.log(dbPath);
//   const fileData = JSON.parse(fs.readFileSync(dbPath, "utf8"));
//   const guestInfo = fileData[room] || { name: "Valued Guest" };

//   return NextResponse.json(guestInfo);
// }

// export async function POST(request) {
//   const body = await request.json(); // Expected: { room: "101", name: "John" }
//   const fileData = JSON.parse(fs.readFileSync(dbPath, "utf8"));

//   fileData[body.room] = { name: body.name };
//   fs.writeFileSync(dbPath, JSON.stringify(fileData, null, 2));

//   return NextResponse.json({ success: true });
// }

// import fs from "fs";
// import path from "path";

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const room = searchParams.get("room");

//   // Path to root-level file
//   const filePath = path.join(process.cwd(), "data.json");

//   const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

//   const guest = data.find((g) => g.room == room);

//   return Response.json({
//     room,
//     guest: guest || null,
//   });
// }

// export default function handler(req, res) {
//   const { room } = req.query;

//   res.status(200).json({
//     ok: true,
//     room,
//     message: `Guest API working for room ${room}`,
//   });
// }
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const dbPath = path.join(process.cwd(), "data.json");

  // Handle GET request (Reading the name)
  if (req.method === "GET") {
    const { room } = req.query; // Pages router uses req.query

    try {
      const fileData = JSON.parse(fs.readFileSync(dbPath, "utf8"));
      const guestInfo = fileData[room] || { name: "not found" };
      return res.status(200).json(guestInfo);
    } catch (err) {
      return res.status(500).json({ error: "Could not read data.json" });
    }
  }

  // Handle POST request (Saving the name)
  if (req.method === "POST") {
    const { room, name } = req.body;

    try {
      const fileData = JSON.parse(fs.readFileSync(dbPath, "utf8"));
      fileData[room] = { name: name };
      fs.writeFileSync(dbPath, JSON.stringify(fileData, null, 2));
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: "Could not write to data.json" });
    }
  }

  // If method is not GET or POST
  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
