// incorporamos las dependencias
var express = require('express');
var router = express.Router();
// exportamos directamente un función para poder
// inyectar la base de datos
module.exports = function(db){
  //Definimos la colección que vamos a utilizar para obtener la data
  var notasColl = db.collection('notas');
  // declaramos la ruta de las entidades
  // al final en el browser o postman podremos
  // probar con https://localhost:3000/api/notas/getall
  router.get('/getall', function (req ,res, next) {
    // llamamos al método find de la colección sin parametros para
    // obtener todos los documentos almacenados
    // luego usamos el método getArray para convertir el cursor
    // en un arreglo que podamos utilizar.
    notasColl.find().toArray(function(err, docs){
      // si hay un error devolvemos al cliente un error con mensaje
      if (err) {
        return res.status(404).json({"error":"Error al buscar"});
      }
      // Si no hay error le devolvemos las coleccion de documentos en
      // la colección.
      return res.status(200).json(docs);
    });
  }); // end get
  return router;
}