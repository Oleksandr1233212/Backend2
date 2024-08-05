const bcrypt = require('bcrypt');
const User = require('../modeles/userModele');

const registerUser = async (req, res) => {
    try {
        console.log('prischlo')
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send('UserName and Password are required!');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username: username, password: hashedPassword });
        await user.save();
        res.status(201).send('User register successfully!');
        
    } catch (error) {
        res.status(500).send('Error registering new User!');
    }
};

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send('UserName and Password are required!');
        }
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).send('User Is Not Found!');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send("Invalid Password!");
        }
        res.json({ message: "Login Successful!", userId: user._id, userName: user.username });
    } catch (error) {
        res.status(500).send('Error Login!');
    }
};

module.exports = { registerUser, loginUser };