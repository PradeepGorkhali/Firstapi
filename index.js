import express from "express";
import cors from "cors";
import data from './data.js'


const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/service", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log("Hey");
});
