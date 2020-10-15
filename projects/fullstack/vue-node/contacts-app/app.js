const express = require("express");
const path = require("path");
const app = express();

// Server side
app.use(express.static(path.resolve(__dirname, "client"))); // making the client folder as a static

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

app.listen(3000, () => {
  console.log("Server has been started on port 3000...");
});
