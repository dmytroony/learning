const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const exphbs = require("express-handlebars");
const todoRoutes = require("./routes/todos");

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("MONGODB_URI is not set. Copy .env.example to .env and fill it in.");
  process.exit(1);
}

const app = express();
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs"
});

// Handlebars engine
app.engine("hbs", hbs.engine); // Register the engine with the hbs key
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(todoRoutes);

async function start() {
  try {
    // Connect DB
    await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      }
    );
    app.listen(PORT, () => {
      // Connect server
      console.log(`Server has been started on Port:${PORT}`);
    });
  } catch (e) {
    console.log(e); // error
  }
}

start();
