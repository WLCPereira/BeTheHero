const connection = require('../../database/connection');
module.exports = {
  async create(_req, _res) {
    const { id } = _req.body;

    const ong = await connection('ongs')
      .where('id', id)
      .select('name')
      .first();

    if (!ong) {
      return _res.status(400).json({ error: 'No ONG found with this ID' });
    }

    return _res.json(ong);
  }
};
