const express = require('express');
const postrouter = require("./routes/postRouter");
require('dotenv').config();
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", postrouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Your app is running on port 5000');
});
