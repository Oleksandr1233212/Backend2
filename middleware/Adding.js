const Adding = (Model) =>{
    return async(req,res,next)=>{
        try{
            const {name,id,desc,dateStart,dateEnd,creator}=req.body
            if(!name ||!id||!desc||!dateStart||!dateEnd||!creator){
                res.json('All is needed')
            }
            res.json('All good')
            const course = new Model({name:name,id:id,desc:desc,dateStart:dateStart,dateEnd:dateEnd,creator:creator  });
            course.save()
    
        }catch(error){
            res.json('Something went wrong')
        }

    }
    
}
module.exports = {Adding}