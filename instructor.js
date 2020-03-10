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
    return res.send(req.body)
}


//update


//delete