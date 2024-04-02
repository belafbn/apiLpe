const { getCategoriasDB, addCategoriaDB, deleteCategoriaDB, updateCategoriaDB, getCategoriaPorCodigoDB } = require('../usecases/categoriaUseCases');

const getCategorias = async (request, response) => {
    await getCategoriasDB ()
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            staus : 'error',
            message : 'Erro ao consultar as categorias: ' + err
        }));
}
const addCategorias = async (request, response) => {
    await addCategoriaDB (request.body)
        .then(data => response.status(200).json({
            status : 'sucess', message : 'Categoria criada',
            objeto : data
        }))
        .catch(err => response.status(400).json({
            staus : 'error',
            message : err
        }));
}
const updateCategorias = async (request, response) => {
    await updateCategoriaDB (request.body)
        .then(data => response.status(200).json({
            status : 'sucess', message : 'Categoria alterada',
            objeto : data
        }))
        .catch(err => response.status(400).json({
            staus : 'error',
            message : err
        }));
}
const deleteCategorias = async (request, response) => {
    await deleteCategoriaDB(request.params.codigo)
        .then(data => response.status(200).json({
            status : 'sucess', message : data,
        }))
        .catch(err => response.status(400).json({
            staus : 'error',
            message : err
        }));
}
const getCategoriaPorCodigo = async (request, response) => {
    await getCategoriaPorCodigoDB(request.params.codigo)
        .then(data => response.status(200).json( data))
        .catch(err => response.status(400).json({
            staus : 'error',
            message : err
        }));
}

module.exports = {getCategorias, addCategorias, updateCategorias, deleteCategorias, getCategoriaPorCodigo}