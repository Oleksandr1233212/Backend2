// Як фронтенд працює з JWT
// 1. Логін
// Фронтенд надсилає запит:

import axios from 'axios';

axios.post('/api/auth/login', {
    username: 'johndoe',
    password: 'mypassword',
})
    .then((response) => {
        const accessToken = response.data.accessToken;
        localStorage.setItem('accessToken', accessToken); // Зберігаємо Access Token
    })
    .catch((error) => {
        console.error('Login failed:', error.response.data);
    });


    
    // 2. Доступ до захищених маршрутів
    // Фронтенд додає Access Token у заголовок Authorization:

    import axios from 'axios';

    const token = localStorage.getItem('accessToken');
    
    axios.get('/api/protected', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            console.log('Protected data:', response.data);
        })
        .catch((error) => {
            if (error.response.status === 401) {
                console.error('Access token expired. Need to refresh.');
            }
        });

        
//         3. Оновлення Access Token
// Якщо Access Token закінчився, фронтенд надсилає запит до /refresh:

axios.get('/api/auth/refresh', { withCredentials: true })
    .then((response) => {
        const newAccessToken = response.data.accessToken;
        localStorage.setItem('accessToken', newAccessToken); // Оновлюємо Access Token
    })
    .catch((error) => {
        console.error('Refresh failed:', error.response.data);
    });


//      Як бекенд працює з JWT
// 1. Генерація токенів
const generateAccessToken = (user) => {
    return jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_ACCESS_SECRET,
        { expiresIn: '15m' }
    );
};

const generateRefreshToken = (user) => {
    return jwt.sign(
        { userId: user._id },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: '7d' }
    );
};

// 2. Перевірка Access Token
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided!' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        req.user = decoded; // Зберігаємо інформацію з токена в req.user
        next();
    } catch (error) {
        res.status(403).json({ message: 'Invalid or expired token!' });
    }
};

// 3. Оновлення Access Token

const refreshAccessToken = (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.status(401).json({ message: 'No refresh token provided!' });
    }

    try {
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        const newAccessToken = generateAccessToken({
            _id: decoded.userId,
            role: decoded.role, // Якщо роль додається в Refresh Token
        });
        res.status(200).json({ accessToken: newAccessToken });
    } catch (error) {
        res.status(403).json({ message: 'Invalid or expired refresh token!' });
    }
};

