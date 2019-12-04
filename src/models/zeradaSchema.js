const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const estruturaSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    mes: { type: String, required: true },
    data: { type: String, required: true },
    conta: { type: String, required: true },
    valor: { type: Number, required: true },
    status: { type: String, required: true },
    divida_a_Receber: {type: Boolean} 

})

const zeradaModel = mongoose.model('Eventos', estruturaSchema);

module.exports = zeradaModel;