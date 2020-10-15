const express = require("express");
const path = require("path");
const { v4 } = require("uuid"); // auto-generating id
const app = express();

const CONTACTS = [
  { id: v4(), name: "Dmytro", value: "+380958052625", marked: false }
];

// GET
app.get("/api/contacts", (req, res) => {
  setTimeout(() => {
    res.status(200).json(CONTACTS);
  }, 1000);
});

// POST
app.post("/api/contacts", (req, res) => {});

// Server side settings
app.use(express.static(path.resolve(__dirname, "client"))); // making the client folder as a static

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

// Listen the 3000 port
app.listen(3000, () => {
  console.log("Server has been started on port 3000...");
});
