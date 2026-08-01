// pages/api/logout.js
export default function handler(req, res) {
  res.setHeader(
    "Set-Cookie",
    "orders_auth=; Path=/; HttpOnly; Max-Age=0" // Expire cookie immediately
  );
  return res.status(200).json({ success: true });
}
