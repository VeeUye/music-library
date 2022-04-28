const getDb = require('../services/db');

exports.createArtist = async (req, res) => {
  const db = await getDb();
  const { name, genre } = req.body;
  try {
    await db.query(
      `INSERT INTO Artist (name, genre) VALUES ('${name}', '${genre}')`
    );

    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
  await db.end();
};
