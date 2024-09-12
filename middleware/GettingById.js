const find=(Model)=>{
    return async(req,res,next)=>{
        try{
            const data = await Model.findById(req.body.id)
            if(data){
                res.json(data)
            }
            else{
                res.json('Not fond')
                
            }

        }catch(error){
            res.json("bad")
        }
    }
}