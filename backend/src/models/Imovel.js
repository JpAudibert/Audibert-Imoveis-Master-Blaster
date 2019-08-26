const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ImovelSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },

  valor: {
    type: Number,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

ImovelSchema.plugin(mongoosePaginate);

mongoose.model('Imovel', ImovelSchema);
