const Testim = require('../modeles/TestimonialModele');
const findh = async (req,res) =>{
    try{
        console.log('good')
        const Coursec = await Testim.find({})
        res.json(Coursec)
    } catch(error){
        res.json('Something went wrong')
    }
}
module.exports = { findh };