const { Router } = require("express");
const personRepository = require('../domain/repositories/person.repository');
const router = Router();

router.get('/persons', personRepository.findAll);
router.post('/persons', personRepository.create);

module.exports = router;