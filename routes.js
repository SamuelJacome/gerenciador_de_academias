const express = require('express')
const routes =  express.Router()
const instructors = require('./instructor')
routes.get("/", function(req, res){
    return res.redirect("/instructors")
} )

routes.get("/instructors", function(req, res){
    return res.render("instructors/index.njk")
} )

routes.get("/instructors/create", function(req, res){
    return res.render("instructors/create")
})

routes.get('/instructors/:id', instructors.show)

routes.get('/instructors/:id/edit', instructors.edit)

routes.post("/instructors", instructors.post )

routes.put("/instructors", instructors.put)

routes.get("/members", (req, res) => { res.send("members")})

module.exports = routes