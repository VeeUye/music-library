const { expect } = require('chai');
const request = require('supertest');
const getDb = require('../src/services/db');
const app = require('../src/app');

describe('read artist', () => {
  let db;
  let artists;
  let albums;

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
        'Dave Brubeck Quartet',
        'jazz',
      ]),
    ]);
    [artists] = await db.query('SELECT * FROM Artist');

    await Promise.all([
      db.query('INSERT INTO Album (name, year, artistId) VALUES(?, ?, ?)', [
        'The Slow Rush',
        2020,
        artists[0].id,
      ]),
      db.query('INSERT INTO Album (name, year, artistId) VALUES(?, ?, ?)', [
        'Disco',
        2020,
        artists[1].id,
      ]),
      db.query('INSERT INTO Album (name, year, artistId) VALUES(?, ?, ?)', [
        'Dave Brubeck Quartet',
        1952,
        artists[2].id,
      ]),
    ]);
  });

  afterEach(async () => {
    await db.query('DELETE FROM Artist');
    await db.query('DELETE FROM Album');
    await db.close();
  });

  describe('/album', () => {
    describe('GET', () => {
      it('returns all album records in the database', async () => {
        const res = await request(app).get('/album').send();
        expect(res.status).to.equal(200);
        expect(res.body.length).to.equal(3);

        res.body.forEach((albumRecord) => {
          const expected = albums.find((a) => a.id === albumRecord.id);

          expect(albumRecord).to.deep.equal(expected);
        });
      });
    });
  });

  //   describe('/artist/:artistId', () => {
  //     describe('GET', () => {
  //       it('returns a single artist with the correct id', async () => {
  //         const expected = artists[0];
  //         const res = await request(app).get(`/artist/${expected.id}`).send();

  //         expect(res.status).to.equal(200);
  //         expect(res.body).to.deep.equal(expected);
  //       });

  //       it('returns a 404 if the artist is not in the database', async () => {
  //         const res = await request(app).get('/artist/999999').send();

  //         expect(res.status).to.equal(404);
  //       });
  //     });
  //   });
});
