const connection = require('../../database/connection');

module.exports = {
  async index(_req, _res) {
    const { page = 1 } = _req.query;
    const [count] = await connection('incidents').count();
    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      ]);

    _res.header('X-Total-Count', count['count(*)']);

    return _res.json(incidents);
  },

  async create(_req, _res) {
    const { title, description, value } = _req.body;
    const ong_id = _req.headers.authorization;

    const [id] = await connection('incidents').insert({
      title,
      descrption: description,
      value,
      ong_id
    });
    return _res.json({ id });
  },

  async delete(_req, _res) {
    const { id } = _req.params;
    const ong_id = _req.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (ong_id !== incident.ong_id) {
      return _res
        .status(401)
        .json({ error: 'Ong não autorizada a deletar este caso!' });
    }

    await connection('incidents')
      .where('id', id)
      .delete();

    return _res.status(204).send();
  }
};
