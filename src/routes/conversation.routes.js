const {Router} = require('express');
const { createConversation, createConversationGrupal } = require('../controllers/conversation.controllers');


const router = Router();

router.post('/api/v1/conversation', createConversation)

router.post('/api/v1/conversationes', createConversationGrupal)

module.exports= router;