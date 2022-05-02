const express = require("express")
const app = express();
const ejs = require("ejs");
const path = require("path")

app.use(express.static(path.join(__dirname, "../public")));
app.set('view engine', "ejs");


app.get("/home", (req, res) => {
    res.render("home");
})

app.get("/faq", (req, res) => {
    res.render("faq");
})

app.listen(8000);