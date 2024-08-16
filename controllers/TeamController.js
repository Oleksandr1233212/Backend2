const Team = require('../modeles/TeamModele');
const findt = async (req,res) =>{
    try{
        console.log('good')
        const Coursec = await Team.find({})
        res.json(Coursec)
    } catch(error){
        res.json('Something went wrong')
    }
}
module.exports = { findt };