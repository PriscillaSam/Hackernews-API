import { GraphQLServer } from 'graphql-yoga';
import FeedController from './controllers/Feed';
import { prisma } from './generated/prisma-client';

// const { GraphQLServer } = require('graphql-yoga')
const feedController = new FeedController();

// 2
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: (root, args, context, info) => feedController.getAll(context),
  },

  Mutation: {
    get: (parent, args) => feedController.fetch(args.id),
    post: (parent, args, context) => feedController.create(context, args, true),
    update: (parent, args) => feedController.update(args),
    delete: (parent, args) => feedController.delete(args.id)
  }
};

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma },
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
