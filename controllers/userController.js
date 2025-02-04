const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../modeles/userModele');

// Генерація Access Token
const generateAccessToken = (user) => {
    return jwt.sign(
        { userId: user._id, role: user.role }, // Додаємо роль у токен
        process.env.JWT_ACCESS_SECRET,
        { expiresIn: '15m' } // 15 хвилин
    );
};

// Генерація Refresh Token
const generateRefreshToken = (user) => {
    return jwt.sign(
        { userId: user._id, role: user.role }, // Роль не обов'язкова для Refresh Token
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: '7d' } // 7 днів
    );
};

// Реєстрація користувача
const registerUser = async (req, res) => {
    try {
        const { username, password, role } = req.body;

        if (!username || !password || !role) {
            return res.status(400).json({ message: 'Username, password, and role are required!' });
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists!' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword, role });
        await user.save();

        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

// Логін користувача
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        console.log(username);
        console.log(password);

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User not found!!!' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password!' });
        }

        const forcedUser = {
            _id: user._id,
            username: user.username,
            role: 'student', // Примусово встановлюємо "admin"
        };

        const accessToken = generateAccessToken(forcedUser);
        const refreshToken = generateRefreshToken(forcedUser);

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 днів
        });

        const { password: _, ...userData } = user.toObject();

        res.status(200).json({
            message: 'Login successful!',
            accessToken,
            refreshToken,
            user: forcedUser,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};

// Оновлення Access Token
// Оновлення Access Token
// Оновлення Access Token (форсована роль "admin")
const refreshAccessToken = async (req, res) => {
    try {
        const { refreshToken } = req.cookies;

        if (!refreshToken) {
            return res.status(401).json({ message: 'No refresh token provided!' });
        }

        jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, async (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Invalid or expired refresh token!' });
            }

            // Форсуємо роль "admin"
            const forcedUser = {
                userId: decoded.userId,
                role: 'admin', // Примусово встановлюємо "admin"
            };

            // Генеруємо новий токен
            const accessToken = generateAccessToken(forcedUser);

            res.status(200).json({ accessToken });
        });
    } catch (error) {
        res.status(500).json({ message: 'Error refreshing token', error: error.message });
    }
};



module.exports = { registerUser, loginUser, refreshAccessToken };
