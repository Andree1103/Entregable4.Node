const {Router} = require('express');
const { getParticipanteWithConver, getParticipantsAndMessages } = require('../controllers/participants.controllers');

const router= Router();

router.get('/api/v1/participants/:iduser/conversation', getParticipanteWithConver)
router.get('/api/v1/participants/:idParticipants/messages', getParticipantsAndMessages)

module.exports= router;