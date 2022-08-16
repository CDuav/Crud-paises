const{Router}= require('express');

const router = Router();

const paisesCtrl= require('../controllers/paises.controller');

 
//consultar todos los paises
router.get('/paises', paisesCtrl.getPaises);
//consultar un pais
router.get('/paises/:id', paisesCtrl.getPais)
//Crear un paises
router.post('/paises', paisesCtrl.createPais)
//eliminar un paises
router.delete('/paises/:id', paisesCtrl.deletePais);
//actualizar un paises
router.put('/paises/:id', paisesCtrl.editPaises);

module.exports=router;
