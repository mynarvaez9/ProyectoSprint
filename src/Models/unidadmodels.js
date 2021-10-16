'use strick';
var connection = require('../../config/db.config')
//creacion del objeto de la tabla unidad
var Unidad = function(unidad){
    this.codigo_Unidad    = unidad.codigo_Unidad;
    this.descripcionU     = unidad.descripcionU;
   };
  // crear la funcion insertar unidad
  
  Unidad.create = function (Unidad, result) {
    connection.query("INSERT INTO tbl_unidad set ?", Unidad, function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(err, null);
  }
  else{
    console.log(res.insertId);
    result(null, res.insertId);
  }
  });
  };
  // llamar el metodo de consultar en la tabla unidad
Unidad.findById = function (id, result) {
    connection.query("Select * from tbl_unidad where id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
    };
  //listar todos los valore
  



    Unidad.findAll = function (result) {
    connection.query("Select * from tbl_unidad", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('unidad : ', res);
      result(null, res);
    }
    });
    };


    Unidad.update = function(id, unidad, result){
        connection.query("UPDATE tbl_unidad SET descripcionU = ? WHERE codigo_Unidad = ?", [unidad.descripcionU,id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }else{
          result(null, res);
        }
        });
        };
        Unidad.delete = function(id, result){
        connection.query("DELETE FROM tbl_unidad WHERE id = ?", [id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          result(null, res);
        }
        });
        };
        module.exports= Unidad;
