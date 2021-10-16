'use strict';
const Unidad = require('../Models/unidadmodels');
exports.findAll = function(req, res) {
Unidad.findAll(function(err, unidad) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', unidad);
  res.send(unidad);
});
};
exports.create = function(req, res) {
const new_unidad = new Unidad(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Unidad.create(new_unidad, function(err, unidad) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Unidad added successfully!",data:unidad});
});
}
};
exports.findById = function(req, res) {
Unidad.findById(req.params.id, function(err, unidad) {
  if (err)
  res.send(err);
  res.json(unidad);
});
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Unidad.update(req.params.id, new Unidad(req.body), function(err, unidad) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Unidad successfully updated' });
});
}
};
exports.delete = function(req, res) {
Unidad.delete( req.params.id, function(err, unidad) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Unidad successfully deleted' });
});
};