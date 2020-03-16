const fs = require('fs')
const data = require("./data.json")


//Create

exports.post = function(req, res){
    //req.query
    //req.body post
    const keys = Object.keys(req.body)
    // ["avatar_url","name","birth","gender","services"] não pega os valores, só as chaves.
    for(key of keys){
        if (req.body[key] == ""){
            return res.send("Please, fill all fields ")
        }
    }

    req.body.birth = Date.parse(req.body.birth)
    req.body.created_at = Date.now()
    req.body.id = Number(data.instructors.length+1)
    data.instructors.push({ 
        avatar_url,
        birth,
        created_at,
        id,
        gender,
        services,
        name    
    }) 


    const{ avatar_url, birth, created_at, id, services, gender } = req.body

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("write file error!")
        
        return res.redirect("/instructors")

    })
    // return res.send(req.body)
}


//update


//delete