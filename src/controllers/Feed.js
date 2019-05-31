import Model from '.';
import { prisma } from '../generated/prisma-client';
import feed from '../data/Feed.data';

class Feed extends Model {
  constructor() {
    super();
    this.data = feed;
  }

  async testFunctionToUsePrisma(url, description) {
    const link = await prisma.createLink({
      url,
      description
    });

    console.log(link, )
    const links = await prisma.links();
  }

  create(context, args, isFeed) {
    const { url, description } = args;
    const link = context.prisma.createLink({
      url,
      description
    });
    return link;
  }

  getAll(context) {
    return context.prisma.links();
  }
}

export default Feed;
