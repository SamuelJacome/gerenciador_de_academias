const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes")
const server = express()

server.use(express.urlencoded({ extended: true}))
server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    const about = {
        avata_url: "https://avatars0.githubusercontent.com/u/39867221?s=400&v=4",
        name: "Samuel Jácome",
        role:"Desenvolvedor na empresa 'Não sei o nome ainda'",
        descripton:'Programador Full-Stack, Estudante da <a href="https://ulbra-to.br" target="_blank">Ulbra</a> focado em aprender as melhores práticas. ',
        links: [
            {name: "Github", url: "https://github.com/samueljacome/"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/samuel-j%C3%A1come-a44bb9157/"}
        ]
    }
    return res.render("about", {about: about})
} )

server.listen(5000, function(){
    console.log("server is running")
})