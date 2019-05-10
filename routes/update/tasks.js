const { Router } = require("express");
const router = Router();
const multer = require("multer");
const path = require("path");
const uuid = require('uuid/v4');
const CSVToJSON = require("csvtojson");
const TasksService = require("../../services/tasks");

const taskService = new TasksService();

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/uploads/tasks/"),
  filename: (req, file, cb) => {
    cb(null, uuid() + path.extname(file.originalname).toLocaleLowerCase());
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5000000 },
  fileFilter: (req, file, cb) => {
    const filetypes = /csv/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname));
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      // cb("Error: Archivo debe ser csv");
      return cb(null, false);
    }
  }
});

router.post("/", upload.single("tasksFile"), async function(req, res) {
  if(req.file !== undefined){
    const path = req.file.path;
    CSVToJSON()
      .fromFile(path)
      .then(source => {
        return source;
      })
      .then(async function(source) {
        try {
          const createdTask = await taskService.createTasks(source);
          res.status(201).json({
            data: createdTask,
            message:
              "El archivo " +
              req.file.originalname +
              " ha sido cargado"
          });
        } catch (err) {
          res.json({ error_post: err });
        }
      });
  } else {
    res.status(200).json({
      data: false,
      message: "Extensión invalida"
    });
  }
});

module.exports = router;
