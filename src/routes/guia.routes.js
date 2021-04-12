// Rutas de Guia --> Hacia el Controlador
const express = require ('express');
const router = express.Router();

const guia = require ('../controllers/guia.controllers');

router.get('/', guia.getGuias);
router.get('/:id', guia.getSelectedGuia );
router.post('/',guia.createNewGuia);
router.put('/:id',guia.modifyGuia);
router.delete('/:id', guia.deleteGuia);

module.exports = router;