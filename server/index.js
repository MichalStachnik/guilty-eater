const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');

const Food = require('./models/food');

require('dotenv').config();

const typeDefs = gql`
  type Food {
    id: ID!
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
  }

  type Mutation {
    createFood(
      type: String!
      landUseChange: Float!
      animalFeed: Float!
      farm: Float!
      processing: Float!
      transport: Float!
      packaging: Float!
      retail: Float!
    ): Food
  }
`;

const resolvers = {
  Query: {
    foods: () => Food.find(),
  },

  Mutation: {
    createFood: async (
      _,
      {
        type,
        landUseChange,
        animalFeed,
        farm,
        processing,
        transport,
        packaging,
        retail,
      }
    ) => {
      const newFood = new Food({
        type,
        landUseChange,
        animalFeed,
        farm,
        processing,
        transport,
        packaging,
        retail,
      });

      return newFood.save();
    },
  },
};

const startServer = async () => {
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

startServer();
