const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const _ = require("lodash");

const Reviews = require("./models/reviews");
const Emails = require("./models/emails");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "static")));

app.get("/", async (req, res) => {
  let reviews = await Reviews.find({});
  reviews = reviews.slice(0, 5);
  res.render("home", { reviews: reviews });
});
app.get("/contact", async (req, res) => {
  res.render("contact");
});
app.get("/reviews", async (req, res) => {
  let reviews = await Reviews.find({});

  res.render("reviews", { reviews: reviews });
});
app.post("/add-review", async (req, res) => {
  console.log(req.body);
  req.body.name = _.capitalize(req.body.name);
  req.body.desc = _.capitalize(req.body.desc);
  let review = await Reviews.create(req.body);
  res.redirect("/");
});

app.post("/subscribe", async (req, res) => {
  console.log(req.body);
  let newEmail = await Emails.create({ email: req.body.email });
  res.redirect("/");
});

app.get("/services", async (req, res) => {
  res.render("services");
});
app.get("/shop/:type", async (req, res) => {
  res.render("shop-" + req.params.type);
});

module.exports = app;
