const express = require("express")
const app = express();
const ejs = require("ejs");
const path = require("path")
<<<<<<< HEAD
const port=process.env.PORT || 8000
=======
const PORT = process.env.PORT || 8000
>>>>>>> 3249801511cbfb35f28ec7ae30dc68e874764d11

app.use(express.static(path.join(__dirname, "../public")));
app.set('view engine', "ejs");


app.get("/home", (req, res) => {
    res.render("home");
})


app.get("/contacts", (req, res) => {
    res.render("contacts"); 
})
app.get("/faq", (req, res) => {
    res.render("faq"); 
})

app.get("/how-to-apply-for-a-patent-at-nit-delhi", (req, res) => {
    res.render("howToFileIpr");
})

<<<<<<< HEAD
app.listen(port); 
=======
app.listen(PORT); 
>>>>>>> 3249801511cbfb35f28ec7ae30dc68e874764d11
