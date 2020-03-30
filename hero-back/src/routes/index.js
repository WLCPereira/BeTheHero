const express = require('express');

const OngController = require('../controllers/ongControllers');
const IncidentsController = require('../controllers/incidentControllers');
const ProfileIncidents = require('../controllers/profileController/incident');
const SessionController = require('../controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileIncidents.index);
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incident/:id', IncidentsController.delete);
module.exports = routes;
