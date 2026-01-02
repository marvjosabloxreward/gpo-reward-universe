import jwt from "jsonwebtoken";

export default function handler(req, res) {
  const token = req.cookies?.auth;
  if (!token) return res.status(401).json(null);

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    res.json(user);
  } catch {
    res.status(401).json(null);
  }
}
