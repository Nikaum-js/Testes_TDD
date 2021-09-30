const routes = require('express').Router();

const authMiddleware = require('./app/middleware/auth')

const SessionController = require('./app/controllers/SessionController')

// Definição de todas as rotas
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/dashboard', (request, response) => {
  return response.status(200).send();
});

module.exports = routes;