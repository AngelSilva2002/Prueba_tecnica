const platoctrl = {}
const plato = require('../models/plato')

//GET

platoctrl.getplatoss = async (req, res) => {
   const platos = await plato.find()
   res.json(platos)
}

// POST
platoctrl.createplato = async (req, res) => {
   const newplato =  new plato(req.body)

   await newplato.save()
   res.send("plato creado")
}

//GET ONE
platoctrl.getplato = async (req, res) => {
   const plato = await plato.findById(req.params.id)
   res.send(plato)

}

// PUT
platoctrl.editplato = async (req, res) => {
  await plato.findByIdAndUpdate(req.params.id, req.body)
  res.json({status: 'plato editado'})
}

//DELETE
platoctrl.deleteplato = async (req, res) => {
   await plato.findByIdAndDelete(req.params.id)
   res.json({status: 'plato eliminado'})
}

module.exports = platoctrl