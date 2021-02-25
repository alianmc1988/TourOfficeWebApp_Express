const express = require ('express');
const router = express.Router();

const employee = require('../controllers/employee.controler');
router.get('/', employee.getEmployees );
router.get('/:id',employee.getSelectedEmployee);
router.post ('/', employee.createEmployee);
router.put('/:id', employee.modifyEmployee );
router.delete('/:id', employee.deleteEmployee);

module.exports = router;