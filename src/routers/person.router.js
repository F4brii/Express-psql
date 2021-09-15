const { Router } = require("express");
const personController = require('../controllers/person.controller');
const router = Router();

router.get('/persons', personController.findAll);
router.post('/persons', personController.create);

module.exports = router;