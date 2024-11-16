require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { router } = require("./routes/emailRoute");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1",router);

const {PORT} = process.env;

app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`);
})
