const mongoose = require('mongoose');

const Imovel = mongoose.model('Imovel');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.body;
    const imoveis = await Imovel.paginate({}, { page, limit: 15 });

    return res.json(imoveis);
  },
};
