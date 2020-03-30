const connection = require('../../../database/connection');

module.exports = {
  async index(_req, _res) {
    const ong_id = _req.headers.authorization;
    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return _res.json(incidents);
  }
};
