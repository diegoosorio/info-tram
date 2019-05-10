const { Router } = require('express');
const CeroService = require('../../services/cero')
const router = Router();

const ceroService = new CeroService();

router.post("/", async function(req, res, next) {
  const { body: cero } = req;
  console.log("req", req.body);
  // res.json({data: cero, message: "Recibido"})
  try {
    const createdCero = await ceroService.createCero({ cero });

    res.status(201).json({
      data: createdCero,
      message: "La fecha ha sido guardada"
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;