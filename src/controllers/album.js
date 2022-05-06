const getDb = require('../services/db');

exports.createAlbum = async (req, res) => {
  const db = await getDb();
  const { name, year, artistID } = req.body;
  try {
    await db.query(
      `INSERT INTO Album (name, year, artistID) VALUES (?, ?, ?)`,
      [name, year, artistID]
    );

    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
  await db.end();
};

exports.readAlbum = async (req, res) => {
  const db = await getDb();
  try {
    const [album] = await db.query('SELECT * FROM Album');
    res.status(200).json(album);
  } catch (err) {
    res.status(500);
  }
  await db.end();
};
