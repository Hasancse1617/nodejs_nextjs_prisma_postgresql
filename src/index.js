const express = require('express');
const router = require("./routes/Router");
require('dotenv').config();
const app = express();

app.get("/", (req,res)=>{
    res.send("Hasan");
})
app.use("/api", router);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Your app is running on port 5000');
});
