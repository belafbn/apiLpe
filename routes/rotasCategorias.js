const { Router } = require('express');

const {getCategorias, addCategorias, updateCategorias, deleteCategorias, getCategoriaPorCodigo} = require ('../controllers/categoriaController')

const rotasCategorias = new Router();

rotasCategorias.route('/categoria')
    .get(getCategorias)
    .post (addCategorias)
    .put (updateCategorias)
rotasCategorias.route('/categoria/:codigo')
    .get(getCategoriaPorCodigo)
    .delete (deleteCategorias)

module.exports = {rotasCategorias};