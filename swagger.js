const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'LMS API',
            version: '1.0.0',
            description: 'API documentation for the Learning Management System',
        },
        servers: [
            { url: 'http://localhost:5048/api', description: 'Public API (no auth)' }, // Публічні маршрути
            { url: 'http://localhost:5048/api/auth', description: 'Authenticated API' }, // Захищені маршрути
        ],
    },
    apis: ['./routes/**/*.js'], // Шлях до всіх файлів із Swagger-документацією
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };
