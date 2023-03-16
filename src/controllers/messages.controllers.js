const messagesService = require("../services/messages.service");


const createMessages = async(req,res,next) => {
    try {
        const newMes= req.body;
        const result = await messagesService.create(newMes);
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createMessages
}