const Conversation = require("../models/conversations.models");
const Participants = require("../models/participants.models");

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
}
module.exports = ConversationService;