const Cource = require('../modeles/CourseModele');
const findc = async (req,res) =>{
    try{
        console.log('good')
        const Coursec = await Cource.find({})
        res.json(Coursec)
    } catch(error){
        res.json('Something went wrong')
    }
}
module.exports = { findc };