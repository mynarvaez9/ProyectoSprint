const express = require('express')
const router = express.Router()
const unidadController =   require('../Controllers/unidadcontrollers');
// Retrieve all unidad
router.get('/', unidadController.findAll);
// Create a new unidad
router.post('/', unidadController.create);
// Retrieve a single unidad with id
router.get('/:id', unidadController.findById);
// Update a unidad with id
router.put('/:id', unidadController.update);
// Delete a unidad with id
router.delete('/:id', unidadController.delete);
module.exports = router
