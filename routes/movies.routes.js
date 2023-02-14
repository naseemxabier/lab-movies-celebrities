const router = require("express").Router();
const Movie = require("../models/Movie.model")
const Celebrity = require("../models/Celebrity.model")

router.get("/create", (req, res, next) => {
Celebrity.find()
.populate("name")
.then(result => {
    res.render("movies/nueva", result)
})
.catch(err => next(err))
})
router.post("/create", (req, res, next) => {
    let newMovie = {
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot,
        cast: req.body.cast,
    }
Movie.create(newMovie)
.then(result => {
    console.log(result)
    res.redirect("/movies", result)
})
.catch(res.render("movies/nueva"))
})

module.exports = router;