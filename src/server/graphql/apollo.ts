const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default server;
