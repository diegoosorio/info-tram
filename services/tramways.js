const MongoLib = require("../lib/mongo");

class TramwaysService {
  constructor() {
    this.collection = "tramways";
    this.mongoDB = new MongoLib();
  }

  async getTramways( tags ) {
    const query = tags && { tags: { $in: tags } };
    const tramways = await this.mongoDB.getAll(this.collection, query);

    return tramways || [];
  }

  async getTramwaysById(id) {
    const tramway = await this.mongoDB.get(this.collection, id);
    return tramway || {};
  }

  async createTramway({ tramway }) {
    const createTramwayId = await this.mongoDB.create(this.collection, tramway);

    return createTramwayId;
  }

  async createTramways( tramways ) {
    const createTramwaysId = await this.mongoDB.create(this.collection, tramways);

    return createTramwaysId;
  }

  async updateTramway({ tramwayId, tramway }) {
    const updateTramwayId = await this.mongoDB.update(
      this.collection,
      tramwayId,
      tramway
    );

    return updateTramwayId;
  }

  async deleteTask({ tramwayId }) {
    const deletedTramwayId = await this.mongoDB.delete(
      this.collection,
      tramwayId
    );

    return deletedTramwayId;
  }
}

module.exports = TramwaysService;