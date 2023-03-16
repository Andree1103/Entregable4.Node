const {Router} = require('express');
const { getParticipanteWithConver } = require('../controllers/participants.controllers');

const router= Router();

router.get('/api/v1/participants/:iduser/conversation', getParticipanteWithConver)

module.exports= router;