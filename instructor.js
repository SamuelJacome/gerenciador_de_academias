const fs = require('fs')
const data = require("./data.json")

//show

exports.show = function(req, res){
    const{ id } = req.params

    const foundInstructor = data.instructors.find(function(instructor){
        return id == instructor.id
    })

    if (!foundInstructor) return res.send("Instructor not found")


    function age(timestamp){
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()
       
        if( month < 0 || month == 0 && today.getDate() <=  birthDate.getDate()){
            age = age-1
        }
        return age
    }
    const instructor ={
        ...foundInstructor,
        age: age(foundInstructor.birth),
    
        services: foundInstructor.services.split(","),
        created_at: "",
    }
    return res.render("instructors/show", { instructor })

    
}





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
    let{ avatar_url, birth, services, gender, name } = req.body
    birth = Date.parse(req.body.birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length+1)

    data.instructors.push({ 
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at
            
    }) 


 

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("write file error!")
        
        return res.redirect("/instructors")

    })
    // return res.send(req.body)
}




//delete