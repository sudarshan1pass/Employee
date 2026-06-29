require('dotenv').config();
const express = require("express");
const app = express();
const cors=require('cors');

const port = process.env.PORT || 4000;

app.use(cors({
  origin: ["http://localhost:5173",
         "https://employee-one-psi.vercel.app"
  ],
  credentials: true
}));
app.use(express.json());


const router = require("./Routes/router");
app.use("/api/v1", router);

const ConnectDB = require("./Config/database");
ConnectDB();


app.get("/", (req, res) => {
  res.send("Employee app is running");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
