const MongoLib = require("../lib/mongo");

class CeroService {
  constructor() {
    this.collection = "cero";
    this.mongoDB = new MongoLib();
  }

  async getCero( tags ) {
    const query = tags && { tags: { $in: tags } };
    const cero = await this.mongoDB.getAll(this.collection, query);

    return cero || [];
  }

  // async getTasksById(id) {
  //   const task = await this.mongoDB.get(this.collection, id);
  //   return task || {};
  // }

  async createCero({ cero }) {
    const createCeroId = await this.mongoDB.create(this.collection, cero);

    return createCeroId;
  }

  // async createTasks( tasks ) {
  //   const createTaskId = await this.mongoDB.create(this.collection, tasks);

  //   return createTaskId;
  // }

  // async updateTask({ taskId, task }) {
  //   const updateTaskId = await this.mongoDB.update(
  //     this.collection,
  //     taskId,
  //     task
  //   );

  //   return updateTaskId;
  // }

  // async deleteTask({ taskId }) {
  //   const deletedTaskId = await this.mongoDB.delete(
  //     this.collection,
  //     taskId
  //   );

  //   return deletedTaskId;
  // }
}

module.exports = CeroService;