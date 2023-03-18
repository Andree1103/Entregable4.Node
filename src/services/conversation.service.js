const Conversation = require("../models/conversations.models");
const Messages = require("../models/messages.models");
const Participants = require("../models/participants.models");
const Users = require("../models/users.models");

class ConversationService {
    static async create(newCon,idParti) {
        try {
           const conver = await Conversation.create(newCon,idParti);
           await Participants.create({
            userId: newCon.createdBy,
            conversationsId: conver.id
           });
           await Participants.create({
            userId: idParti,
            conversationsId: conver.id
           })
           return conver;
        } catch (error) {
            throw error
        }
    }
    static async createBulk(newc,idParti) {
        try {
            const conver = await Conversation.create(newc,idParti)
            await Participants.bulkCreate([
                { userId:idParti, conversationsId:conver.id},
                { userId:newc.createdBy, conversationsId:conver.id}
            ])
            return conver;
        } catch (error) {
            throw error;
        }
    }
    static async participantsAndMessages(idParticipants) {
        try {
            const result = await Conversation.findByPk(idParticipants, {
                attributes: ['id','title','createdBy'],
                include: [
                    {
                        model:Participants,
                        attributes: ['user_id'],
                        include: {
                            model:Users,
                            attributes:['username','email']
                        }
                    },
                    {
                        model:Messages,
                        attributes:['id','messages']
                    }
                ]
            })
            return result;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = ConversationService;