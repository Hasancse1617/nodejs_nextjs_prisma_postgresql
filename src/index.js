const express = require('express');
const postrouter = require("./routes/postRouter");
require('dotenv').config();
const app = express();

app.use(express.json());
app.use("/api", postrouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Your app is running on port 5000');
});
