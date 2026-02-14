// Main application
// Initial code outline from Fullstack/HW3
// Edits and additional code by Serena Glick, Winter 2026

const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
const {
  getCapitalsData,
  getPopulousData,
  getRegionsData,
} = require("./back-end.js");

app.set("views", "./public/views");
app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    heading: "Welcome to the Plants vs. Zombies Wiki & Battle Site",
  });
});

app.get("/wiki", async (req, res) => {
  const capitalsData = await getCapitalsData();
  res.render("wiki");
});

app.get("/battle", async (req, res) => {
  const populousData = await getPopulousData();
  res.render("battle");
});

app.get("/about", async (req, res) => {
  const regionsData = await getRegionsData();
  res.render("about");
});

// Page not found error handling
app.use((req, res) => {
  res.status(404).send("404 - page not found");
});

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
