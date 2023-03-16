const {Router} = require('express');
const { createUser, getAllUsers } = require('../controllers/user.controllers');


const router = Router();


router.post('/api/v1/user', createUser);
router.get('/api/v1/users', getAllUsers);


module.exports=router;