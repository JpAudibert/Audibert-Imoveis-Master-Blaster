const express = require('express');

const routes = new express.Router();

const ImovelController = require('./controllers/ImovelController');

routes.get('/imovels', ImovelController.index);

module.exports = routes;
