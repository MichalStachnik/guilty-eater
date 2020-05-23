const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');

// const { Food } = require('./models/food');
const Food = require('./models/food');

require('dotenv').config();

const typeDefs = gql`
  type Food {
    type: String
    landUseChange: Float
    animalFeed: Float
    farm: Float
    processing: Float
    transport: Float
    packaging: Float
    retail: Float
  }

  type Query {
    foods: [Food]
    foodDB: [Food]
  }
`;

const foods = [
  {
    type: 'Wheat & Rye (Bread)',
    landUseChange: 0.1,
    animalFeed: 0.0,
    farm: 0.8,
    processing: 0.2,
    transport: 0.1,
    packaging: 0.1,
    retail: 0.1,
  },
];

const resolvers = {
  Query: {
    foods: () => foods,
    foodDB: () => Food.find(),
  },
};

const server = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.applyMiddleware({ app });

  await mongoose.connect(
    `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds253537.mlab.com:53537/guilty-eater`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  app.listen(5000, () => console.log('listening on 5000'));
};

server();
