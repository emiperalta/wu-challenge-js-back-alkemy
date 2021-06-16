const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const postRoutes = require('./routes/post.routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api', postRoutes);

module.exports = { app };
