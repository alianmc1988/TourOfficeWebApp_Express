const express = require ('express');
const router = express.Router();

const users = require('../controllers/user.controler');
router.get('/', users.getUsers);
router.get('/:id',users.getSelectedUsers);
router.post ('/', users.createUsers);
router.put('/:id', users.modifyUsers );
router.delete('/:id', users.deleteUsers);

module.exports = router;