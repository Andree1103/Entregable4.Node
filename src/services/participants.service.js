const Participants = require("../models/participants.models");
const Conversation = require('../models/conversations.models')


class ParticipantsService {
    static async participantsWithConver(iduser) {
        try {
            const result = await Participants.findAll({
                where: { 'userId': iduser },
                attributes: { exclude: ['id'] },
                include: {
                    model: Conversation,
                    attributes: ['title']
                }
            }
            )
            return result;
        } catch (error) {
            throw (error);
        }
    }
}
module.exports = ParticipantsService;