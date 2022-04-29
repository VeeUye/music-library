// const db = require('../services/db');
const getDb = require('../services/db');

exports.createArtist = async (req, res) => {
  const db = await getDb();
  const { name, genre } = req.body;
  try {
    await db.query(`INSERT INTO Artist (name, genre) VALUES (?, ?)`, [
      name,
      genre,
    ]);

    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
  await db.end();
};

exports.readArtist = async (req, res) => {
  const db = await getDb();
  try {
    const [artists] = await db.query('SELECT * FROM Artist');
    res.status(200).json(artists);
  } catch (err) {
    res.status(500);
  }
  await db.end();
};

exports.readSingleArtist = async (req, res) => {
  const db = await getDb();
  const id = req.params.artistId;

  const [artist] = await db.query('SELECT * FROM Artist WHERE id = ?', [id]);

  !artist[0] ? res.sendStatus(404) : res.status(200).json(artist[0]);
  await db.end();
};

exports.updateArtist = async (req, res) => {
  const db = await getDb();
  const id = req.params.artistId;

  const [artist] = await db.query('SELECT * FROM Artist WHERE id = ?', [id]);

  !artist[0] ? res.sendStatus(404) : res.status(200).json(artist[0]);
  await db.end();
};
