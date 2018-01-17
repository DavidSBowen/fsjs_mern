import config from './config';
import apiRouter from './api'
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import express from 'express';
const server = express();

server.use(sassMiddleware({
    src: path.join(__dirname,'sass'),
    dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', {
        content: 'Here I pass in text through a variable from server.js into the index.ejs file using ejs tags to display it on the page.'
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Express listening on port', config.port);
});