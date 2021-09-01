const pool = require('../../SQL');

module.exports = {
  getStudents: async () => {
    const client = await pool.connect();
    const query = 'SELECT * from students';
    try {
      const results = await client.query(query);
      return results;
    } catch (e) {
      return e;
    } finally {
      client.release();
    }
  },
};
