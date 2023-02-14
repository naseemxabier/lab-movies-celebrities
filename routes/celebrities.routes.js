const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model")

router.get("/create", (req, res, next) => {
   
   res.render('celebrities/new')
})
router.post("/create", (req, res, next) => {
    let newCelebrity = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase,
    };
    Celebrity.create(newCelebrity)
    .then(result => {
        console.log(result)
        res.redirect("/celebrities")
    })
    .catch(res.render('celebrities/new'))
  
})

router.get("/",  (req, res, next) => {
    Celebrity.find()
    .then(result => {
    res.render("celebrities/celebrities", result)
})
.catch(err => next(err))
})



module.exports = router;