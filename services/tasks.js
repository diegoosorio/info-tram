const MongoLib = require("../lib/mongo");

class TasksService {
  constructor() {
    this.collection = "tasks";
    this.mongoDB = new MongoLib();
  }

  async getTasks( tags ) {
    const query = tags && { tags: { $in: tags } };
    const tasks = await this.mongoDB.getAll(this.collection, query);

    return tasks || [];
  }

  async getTasksById(id) {
    const task = await this.mongoDB.get(this.collection, id);
    return task || {};
  }

  async createTask({ task }) {
    const createTaskId = await this.mongoDB.create(this.collection, task);

    return createTaskId;
  }

  async createTasks( tasks ) {
    const createTaskId = await this.mongoDB.create(this.collection, tasks);

    return createTaskId;
  }

  async updateTask({ taskId, task }) {
    const updateTaskId = await this.mongoDB.update(
      this.collection,
      taskId,
      task
    );

    return updateTaskId;
  }

  async deleteTask({ taskId }) {
    const deletedTaskId = await this.mongoDB.delete(
      this.collection,
      taskId
    );

    return deletedTaskId;
  }
}

module.exports = TasksService;