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
}

export default Feed;
