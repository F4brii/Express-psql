const { Router } = require('express');
const router = Router();

const { getPersons } = require('../controllers/person.controller');

router.get('/persons', getPersons);

module.exports = router;