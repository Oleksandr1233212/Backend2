
const findd = (Model) => {
    return async (req, res, next) => {
      try {
        
        const data = await Model.find({});
        res.json(data);
      } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
      }
      next();
    };
  };
module.exports={findd}