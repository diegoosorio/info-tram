const express = require("express");
const router = express.Router();
const TasksService = require("../../services/tasks");

const taskService = new TasksService();

router.get("/", async function(req, res, next) {
  const { tags } = req.query;

  try {
    const tasks = await taskService.getTasks(tags);

    res.status(200).json({
      data: tasks,
      message: "tasks listed"
    });
  } catch (err) {
    next(err);
  }
});

router.get("/:taskId", async function(req, res, next) {
  const { taskId } = req.params;

  console.log("req", req.params);

  try {
    const task = await taskService.getTasksById({ taskId });

    res.status(200).json({
      data: task,
      message: "task retrieved"
    });
  } catch (err) {
    next(err);
  }
});

router.post("/", async function(req, res, next) {
  const { body: task } = req;

  console.log("req", req.body);

  try {
    const createdTask = await taskService.createTask({ task });

    res.status(201).json({
      data: createdTask,
      message: "task created"
    });
  } catch (err) {
    next(err);
  }
});

router.put("/:taskId", async function(req, res, next) {
  console.log("PUT /");
  const { taskId } = req.params;
  const { body: task } = req;

  console.log("req", req.params, req.body);

  try {
    const updatedTask = await taskService.updateTask({
      taskId,
      task
    });
    res.status(200).json({
      data: updatedTask,
      message: "task updated"
    });
  } catch (err) {
    next(err);
  }
});

router.delete("/:taskId", async function(req, res, next) {
  const { taskId } = req.params;

  console.log("req", req.params);

  try {
    const deletedTask = await taskService.deleteTask({ taskId });

    res.status(200).json({
      data: deletedTask,
      message: "task deleted"
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;