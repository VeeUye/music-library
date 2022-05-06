const { expect } = require('chai');
const request = require('supertest');
const getDb = require('../src/services/db');
const app = require('../src/app');

describe('create album', () => {
  let db;

  beforeEach(async () => {
    db = await getDb();
    await Promise.all([
      db.query('INSERT INTO Artist (name, genre) VALUES(?, ?)', [
        'Tame Impala',
        'rock',
      ]),
      db.query('INSERT INTO Artist (name, genre) VALUES(?, ?)', [
        'Kylie Minogue',
        'pop',
      ]),
      db.query('INSERT INTO Artist (name, genre) VALUES(?, ?)', [
        'Dave Brubeck',
        'jazz',
      ]),
    ]);
  });

  afterEach(async () => {
    await db.query('DELETE FROM Album');
    await db.close();
  });

  describe('/artist/:artistID/album', () => {
    describe('POST', () => {
      it('creates a new album in the database', async () => {
        const res = await request(app).post('/album').send({
          name: 'The Slow Rush',
          year: 2020,
        });

        expect(res.status).to.equal(201);

        const [[albumEntries]] = await db.query(
          `SELECT * FROM Album WHERE name = 'The Slow Rush'`
        );

        expect(albumEntries.name).to.equal('The Slow Rush');
        expect(albumEntries.year).to.equal(2020);
      });
    });
  });
});
