require('dotenv').config();
require('express-async-errors');

const express = require('express');

const app = express();

// middlewares
app.use(express.json());
const swaggerUI = require('swagger-ui-express');
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

// routes
const routes = require('./routes/v1');

const { swaggerDocument, swaggerOptions } = require('./swagger');

app.use('/api/v1', routes);
app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocument, swaggerOptions));

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;
