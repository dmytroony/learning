import express from "npm:express@4";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(3000);