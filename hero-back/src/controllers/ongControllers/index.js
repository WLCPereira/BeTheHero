const crypto = require('crypto');
const connection = require('../../database/connection');

module.exports = {
  async create(_req, _res) {
    const { name, email, whatsapp, city, uf } = _req.body;
    const id = crypto.randomBytes(8).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return _res.json({ id });
  },

  async index(_req, _res) {
    const ongs = await connection('ongs').select('*');

    return _res.json(ongs);
  }
};
