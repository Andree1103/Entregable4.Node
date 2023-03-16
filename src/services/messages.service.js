const Messages = require("../models/messages.models");


class messagesService {
    static async create (newMes) {
        try {
            const mess= await Messages.create(newMes);
            return mess;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = messagesService;