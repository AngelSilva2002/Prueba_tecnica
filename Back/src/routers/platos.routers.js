const { Router, request } = require('express')

const router = Router()
const platoctrl = require('../controllers/plato.controller.js');
const plato = require('../models/plato.js');
//CRUD USUARIOS
router.get('/platos', platoctrl.getplatoss);
router.post('/platos', platoctrl.createplato);
router.get('/platos/:id', platoctrl.getplato);
router.put('/platos/:id', platoctrl.editplato);
router.delete('/platos/:id', platoctrl.deleteplato);


module.exports = router