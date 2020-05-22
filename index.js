const { ApolloServer, gql } = require('apollo-server');

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
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(5000).then(() => console.log('server listening on 5000'));
