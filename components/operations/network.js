const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const misc = require('../../middelwares/misc');
const router = express.Router();

/** 
 * Endpoint that receives three params and performs a mathematical operation
 * @param number1 - positive integer
 * @param number2 - positive integer
 * @param typrOperation - basic operation type
 * @return result objet json {Operation, input values, Result, Time ejecution, Timestamp}
 */
router.get('/:number1/:number2/:type', async (req, res) =>{
  const typeO = req.params.type;
  let typeOperation = typeO.toLowerCase();
  const number1 = req.params.number1;
  const number2 = req.params.number2;
  
  console.log(`Start: ${misc.logConTimestamp('es-CR', 'America/Costa_Rica')}`);

  await controller.operations(number1, number2, typeOperation)
  .then((data) =>{
    data.Status = 200;
    response.success(req, res, data, 200);
  })
  .catch(err => {
    err.Status = 404;
    response.error(req, res, `${err}`, 404, `Operations-${misc.obtenerLinea()}: ${err}`);
  });
  console.log(`End: ${misc.logConTimestamp('es-CR', 'America/Costa_Rica')}`);
});

module.exports = router;