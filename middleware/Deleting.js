const Delete=(Model)=>{
    return async(req,res,next)=>{
        try{
            
            if(!id){
                res.json('id is required')
            }
            await Model.findByIdAndDelete(req.body.id)
            res.json('Good')



        }catch(error){
            res.json('Not good')

        }
    }
}