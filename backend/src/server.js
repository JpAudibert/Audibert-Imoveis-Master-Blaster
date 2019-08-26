const express = require('express');
const mongoose = require('mongoose');
const { config } = require('dotenv');
const { join } = require('path');
const { ok } = require('assert');

const app = express();

const env = process.env.NODE_ENV || 'dev';
ok(env === 'prod' || env === 'dev', 'A env é inválida, ou dev ou prod');

const configPath = join(__dirname, './../config', `.env.${env}`);
config({
  path: configPath,
});

const { NODE_PORT } = process.env;
const { NODE_HOST } = process.env;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(NODE_PORT, NODE_HOST);
