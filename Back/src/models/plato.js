const {Schema, model} = require ("mongoose")

const PlatoSchema = new Schema ({
    Nombre: {type: String, required: true},
    Precio: {type: Number, required: true},
    Color: {type: String, required: true},
    Inicio_actividad: {type: Date, required: false},

}, {
    timestamps: true,
    versionKey: false,
})

module.exports = model('Plato', PlatoSchema)
