const {Router} = require('express');
const { createConversation, createConversationGrupal, getParticipantsAndMessages } = require('../controllers/conversation.controllers');


const router = Router();

router.post('/api/v1/conversation', createConversation)

router.post('/api/v1/conversationes', createConversationGrupal)

router.get('/api/v1/conversations/:idParticipants/messages', getParticipantsAndMessages)

module.exports= router;