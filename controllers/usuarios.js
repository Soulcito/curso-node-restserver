
const {request,response} = require('express');

const usuariosGet = (req = request, res = response) => {

  const query = req.query;

  res.json({
    msg: 'get API - controlador',
    query
  });
}

const usuariosPost = (req = request, res = response) => {

  const body = req.body;

  res.json({
    msg: 'post API - controlador',
    body
  });
}

const usuariosPut = (req = request, res = response) => {

  const id = req.params.id;

  res.json({
    msg: 'put API - controlador',
    id
  });
}

const usuariosPatch = (req = request, res = response) => {
  res.json({
    msg: 'patch API - controlador'
  });
}

const usuariosDelete = (req = request, res = response) => {
  res.json({
    msg: 'delete API - controlador'
  });
}

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete
}