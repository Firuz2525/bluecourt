// pages/api/login.js
export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { password } = req.body;
  const SECRET_PASSWORD = process.env.NEXT_PUBLIC_ORDERS_PASSWORD || "hotel123";

  if (password === SECRET_PASSWORD) {
    // Set an HttpOnly cookie so JavaScript running on the client cannot read or manipulate it
    res.setHeader(
      "Set-Cookie",
      "orders_auth=authenticated; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400" // Expires in 24 hours
    );

    return res.status(200).json({ success: true });
  }

  return res.status(401).json({ message: "Incorrect password" });
}
