const { Router } = require('express');

const {verificaJWT} = require('../controllers/segurancaController');


const {getCategorias, addCategorias, updateCategorias, deleteCategorias, getCategoriaPorCodigo} = require ('../controllers/categoriaController')

const rotasCategorias = new Router();

rotasCategorias.route('/categoria')
    .get(verificaJWT,getCategorias)
    .post (verificaJWT,addCategorias)
    .put (verificaJWT,updateCategorias)
rotasCategorias.route('/categoria/:codigo')
    .get(verificaJWT, getCategoriaPorCodigo)
    .delete (verificaJWT, deleteCategorias)

module.exports = {rotasCategorias};