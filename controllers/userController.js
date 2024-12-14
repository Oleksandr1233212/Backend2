const bcrypt = require('bcrypt');
const User = require('../modeles/userModele');

const registerUser = async (req, res) => {
    try {
        
        console.log('prischlo')
        const { firstName, password, email } = req.body;
        console.log('Received data:', req.body);
        if (!firstName || !password) {
            return res.status(400).send('UserName and Password are required!');
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Username before saving:', firstName);
        const user = new User({ firstName: firstName, password: hashedPassword, email: email });
        await user.save();
        res.status(201).send('User register successfully!');
        
    } catch (error) {
        console.error('Error details:', error.message, error.stack);
        res.status(500).send('Error registering new User!');
    }
};

const loginUser = async (req, res) => {
    
    try {
        console.log('prischlo')
        const { firstName, password } = req.body;
        if (!firstName || !password) {
            return res.status(400).send('UserName and Password are required!');
        }
        const user = await User.findOne({ firstName });
        if (!user) {
            return res.status(404).send('User Is Not Found!');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send("Invalid Password!");
        }
        res.json({ message: "Login Successful!", userId: user._id, userrole: user.role });
    } catch (error) {
        res.status(500).send('Error Login!');
    }
};
const newUser = async(req,res) =>{
    try{
        const { firstName, lastName, email } = req.body;
        if(!firstName || !lastName || !email){
            res.status(400).send("Not All variables")
        }
        const user = await User.findOne({ email });
        if(!user){
            res.status(400).send('No user')
        }
        user.role='student'
        user.firstName=firstName
        user.lastName=lastName
        await user.save()
        res.status(200).send('all good')


    }catch(error){
        res.status(500).send('Login Add error')
    }

}
const newTeacher = async(req,res) =>{
    try{
        const { firstName, lastName, email } = req.body;
        if(!firstName || !lastName || !email){
            res.status(400).send("Not All variables")
        }
        const user = await User.findOne({ email });
        if(!user){
            res.status(400).send('No user')
        }
        user.role='teacher'
        user.firstName=firstName
        user.lastName=lastName
        await user.save()
        res.status(200).send('all good')


    }catch(error){
        res.status(500).send('Login Add error')
    }

}
const updUser = async(req,res)=>{
    

  try {
    const { email, firstName, lastName } = req.body;
  if (!email) {
    return res.status(400).send( "Email is required!" );
  }
  
    const updatedStudent = await User.findOneAndUpdate(
       {email} ,
      { firstName, lastName },
      { new: true }
    );

    if (!updatedStudent) {
        console.log('not found')
      return res.status(404).send( "Student not found!");
      
    }

    res.status(200).json({ updatedStudent} );
  } catch (error) {
    console.error(error);
    res.status(500).send( "Server error. Please try again." );
  }
}
const students = async(req,res)=>{
    try{
        const role='student'
        const students = await User.find({ 
            role:
            "student" });
            if (!students) {
                console.log('no users')
                return res.status(404).json({ message: "No students found." });
                
            }
        res.json({ students})
        console.log('fafasdf')

    }catch(error){
        res.status(500).send('bengere bengere')
    }
}
const teachers = async(req,res)=>{
    try{
        const role='student'
        const students = await User.find({ 
            role:
            "teacher" });
            if (!students) {
                console.log('no users')
                return res.status(404).json({ message: "No students found." });
                
            }
        res.json({ students})
        console.log('fafasdf')

    }catch(error){
        res.status(500).send('bengere bengere')
    }

}
module.exports = { registerUser, loginUser, newUser, newTeacher, updUser,students, teachers };