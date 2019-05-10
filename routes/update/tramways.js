const { Router } = require("express");
const router = Router();
const multer = require("multer");
const path = require("path");
const uuid = require('uuid/v4');
const CSVToJSON = require("csvtojson");
const TramwaysService = require("../../services/tramways");

const tramwaysService = new TramwaysService();

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/uploads/tramways/"),
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
      return cb(null, false);
    }
  }
});

router.post("/", upload.single("tramwaysFile"), async function(req, res) {
  if(req.file !== undefined){
  const path = req.file.path;
  CSVToJSON()
    .fromFile(path)
    .then(source => {
      return source;
    })
    .then(async function(source) {
      try {
        const createdTramways = await tramwaysService.createTramways(source);
        res.status(201).json({
          data: createdTramways,
          message:
            "El archivo " +
            req.file.originalname +
            " ha sido cargado"
        });
      } catch (err) {
        res.json({ error: err });
      }
    });
  }else {
    res.status(200).json({
      data: false,
      message: "Extensión invalida"
    });
  }
});

// router.post("/", async function(req, res) {
//   const path = req.files.tramwaysFile[0].path;
//   CSVToJSON()
//     .fromFile(path)
//     .then(source => {
//       return source;
//     })
//     .then(async function(source) {
//       try {
//         const createdTramways = await tramwaysService.createTramways(source);
//         res.status(201).json({
//           data: createdTramways,
//           message:
//           "El archivo " +
//           req.files.tasksFile[0].originalname +
//           " ha sido cargado"
//         });
//       } catch (err) {
//         res.json({ error: err });
//       }
//     });
// });

module.exports = router;
