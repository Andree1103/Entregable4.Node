const Participants = require("../models/participants.models");
const Conversation = require('../models/conversations.models');
const Messages = require("../models/messages.models");


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

    static async participantsAndMessages(idParticipants) {
        try {
            const result = await Participants.findByPk(idParticipants, {
                include: [
                    {
                        model:Conversation,
                        attributes: ['id', 'createdBy','title']
                    },
                    {
                        model:Messages,
                        attributes:['userId','messages']
                    }
                ]
            })
            return result;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = ParticipantsService;