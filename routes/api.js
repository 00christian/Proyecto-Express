// incorporamos las dependencias
var express = require('express');
var router = express.Router();
// exportamos directamente un función para poder
// inyectar la base de datos
module.exports = function(db){
  // incorporamos las rutas definidas de una colección
  var notasApi = require('./apisrc/notas')(db);
  // declaramos la ruta de las entidades
  // al final en el browser o postman podremos
  // probar con https://localhost:3000/api/notas/getall
  router.use('/notas', notasApi);
  return router;
}