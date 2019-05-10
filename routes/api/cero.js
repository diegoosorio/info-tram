const { Router } = require('express');
const CeroSerivice = require('../../services/cero');
const router = Router();
const ceroService = new CeroSerivice();

router.get('/', async (req, res, next)=>{
  const { tags } = req.query;
  try {
    const cero = await ceroService.getCero(tags);
    res.status(201).json({
      data: cero,
      message: "Lista de fechas enviada"
    });
  } catch(err){
    next(err);
  }
})

module.exports = router;