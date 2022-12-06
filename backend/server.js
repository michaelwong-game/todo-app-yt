const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const PORT = process.env.port || 3000;

mongoose.set('strictQuery', false)
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log(`Connected to mongoDB success`);
    })
    .catch((err) => {
        console.log("connected to mongoDB failed:", err);
        process.exit(1);
    });

const cors = require('cors')
const routers = require('./routers/ToDoRouter')

app.use(express.json())
app.use(cors())
app.use(routers)

app.listen(PORT, () => {
    console.log(`Listening on: ${PORT}`);
});
