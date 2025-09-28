const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API Roblox OK !");
});

app.get("/gamepasses/:userId", (req, res) => {
  const userId = req.params.userId;
  res.json({
    data: [
      { id: 123456, name: "GamePass 10 R$", price: 10 },
      { id: 789012, name: "GamePass 50 R$", price: 50 }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
