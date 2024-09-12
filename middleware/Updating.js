const upd=(Model)=>{
    return async(req,res,next)=>{
        try{
            const update= {name,desc,dateStart,dateEnd,creator}=req.body
            const data = await Model.findByIdAndUpdate(req.body.id, update, { new: true })
            res.json('Good',data)

        }catch(error){
            res.json('bad')
        }
    }
}