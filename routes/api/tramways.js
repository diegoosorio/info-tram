const express = require("express");
const router = express.Router();
const TramwaysService = require("../../services/tramways");

const tramwaysService = new TramwaysService();

router.get("/", async function(req, res, next) {
  const { tags } = req.query;

  try {
    const tramways = await tramwaysService.getTramways(tags);

    res.status(200).json({
      data: tramways,
      message: "tramways listed"
    });
  } catch (err) {
    next(err);
  }
});

router.get("/:tramwayId", async function(req, res, next) {
  const { tramwayId } = req.params;

  console.log("req", req.params);

  try {
    const tramway = await tramwaysService.getTramwaysById({ tramwayId });

    res.status(200).json({
      data: tramway,
      message: "tramway retrieved"
    });
  } catch (err) {
    next(err);
  }
});

router.post("/", async function(req, res, next) {
  const { body: tramway } = req;

  console.log("req", req.body);

  try {
    const createdTramway = await tramwaysService.createTramway({ tramway });

    res.status(201).json({
      data: createdTramway,
      message: "tramway created"
    });
  } catch (err) {
    next(err);
  }
});

router.put("/:tramwayId", async function(req, res, next) {
  const { tramwayId } = req.params;
  const { body: tramway } = req;

  console.log("req", req.params, req.body);

  try {
    const updatedTramway = await tramwaysService.updateTramway({
      tramwayId,
      tramway
    });
    res.status(200).json({
      data: updatedTramway,
      message: "tramway updated"
    });
  } catch (err) {
    next(err);
  }
});

router.delete("/:tramwayId", async function(req, res, next) {
  const { tramwayId } = req.params;

  console.log("req", req.params);

  try {
    const deletedTramway = await tramwaysService.deleteTramway({ tramwayId });

    res.status(200).json({
      data: deletedTramway,
      message: "tramway deleted"
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;