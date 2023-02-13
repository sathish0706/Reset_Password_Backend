require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./Database/connect");
const authRoute = require("./Routes/auth.routes");
const userRoute = require("./Routes/user.routes");

const app = express();

app.use(cors());

db();

app.use(express.json());

app.get((req, res) => {
  res.send("Wellcome to my app");
});

app.use("/", authRoute);
app.use("/", userRoute);

const Port = process.env.Port || 5000;

console.log(process.env.Url);

app.listen(Port, () => {
  console.log(`App is running on PORT ${Port}`);
});
