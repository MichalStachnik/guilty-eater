const { MongoClient } = require('mongodb');

require('dotenv').config();

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(
      `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds253537.mlab.com:53537/guilty-eater`,
      {
        useNewUrlParser: true,
      }
    );
    db = await connection.db('my-db');
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should be truthy', async () => {
    expect(connection).toBeTruthy();
  });

  it('should be connected', async () => {
    const users = db.collection('users');
    expect(db).toBeTruthy();
  });

  // const users = db.collection('users');
  // const mockUser = { _id: 'some-user-id', name: 'John' };
  // await users.insertOne(mockUser);
  // const insertedUser = await users.findOne({ _id: 'some-user-id' });
  // expect(insertedUser).toEqual(mockUser);
  // });
});
