const express = require('express');
const router = express.Router();

const home = require('../controllers/home')
const image = require('../controllers/image')


module.exports = app => {

    router.get('/', home.index);
    router.get('/images/:imagen_id', image.index);
    router.post('/images/', image.create);
    router.post('/images/:imagen_id/like', image.like);
    router.post('/images/:imagen_id/comment', image.comment);
    router.delete('/images/:imagen_id', image.remove);



    app.use(router)

}