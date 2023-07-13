import express from 'express';
import dotenv from 'dotenv';
import Bootstrap from './bootstrap';
const path = require('path');
const app = express();
app.set('port',process.env.PORT||5050);
const bootstrap = new Bootstrap(app);