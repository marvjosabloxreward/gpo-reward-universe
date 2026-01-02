import axios from "axios";
import jwt from "jsonwebtoken";
import cookie from "cookie";

export default async function handler(req, res) {
  const code = req.query.code;
  if (!code) return res.redirect("/");

  try {
    const tokenRes = await axios.post(
      "https://discord.com/api/oauth2/token",
      new URLSearchParams({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: "authorization_code",
        code,
        redirect_uri: process.env.REDIRECT_URI,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    const userRes = await axios.get(
      "https://discord.com/api/users/@me",
      {
        headers: {
          Authorization: `Bearer ${tokenRes.data.access_token}`,
        },
      }
    );

    const token = jwt.sign(userRes.data, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("auth", token, {
        httpOnly: true,
        secure: false, // true só em produção
        sameSite: "lax",
        path: "/",
      })
    );

    res.redirect("/verify.html");
  } catch (err) {
    console.error(err);
    res.redirect("/");
  }
}
