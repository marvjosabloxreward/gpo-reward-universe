export default function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send("Missing code");
  }

  res.redirect("/verify.html");
}
