const EventAdd=(Model)=>{
    return async(req,res,next)=>{
        try{
        const {userId, eventId}=req.body
        if(!userId ||!eventId){
            res.json('All are required')
        }
        const event=new Model({courseId:eventId,userId:userId})
        event.save()
        res.json('All good')
        next()

    } catch(error){
        res.json('All are req')

    }
}
}