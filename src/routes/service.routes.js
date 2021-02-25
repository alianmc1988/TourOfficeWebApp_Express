const express = require ('express');
const router = express.Router();

const service = require('../controllers/service.controler');
router.get('/', service.getServices);
router.get('/:id',service.getSelectedService);
router.post ('/', service.createService);
router.put('/:id', service.modifyService );
router.delete('/:id', service.deleteService);

module.exports = router;