const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger-output.json'; // Файл для збереження документації
const endpointsFiles = ['./server.js']; // Основний файл із маршрутами

const doc = {
    info: {
        title: 'LMS API',
        description: 'API documentation for the Learning Management System',
    },
    host: 'localhost:5043',
    schemes: ['http'],
    tags: [
        {
            name: 'Auth',
            description: 'Authentication routes',
        },
    ],
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log('Swagger documentation generated successfully!');
});
