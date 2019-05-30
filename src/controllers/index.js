class Model {
  constructor() {
    this.data = [];
  }

  getAll() {
    return this.data;
  }

  create(args, isFeed) {
    const id = this.data.length;

    const newData = {
      ...args,
      id: isFeed ? `link-${id}` : id,
    };
    this.data.push(newData);
    return newData;
  }

  fetch(id) {
    return this.data.find(item => item.id === id);
  }

  update(args) {
    let item = this.fetch(args.id);
    if (!item) {
      return null;
    }
    item = { ...item, ...args };
    return item;
  }

  delete(id) {
    let item = this.fetch(id);
    this.data = this.data.filter(entry => entry.id !== id);
    return item;
  }
}

export default Model;
