const Avatar = require("./avatar.models")
const Conversation = require("./conversations.models")
const Messages = require("./messages.models")
const Participants = require("./participants.models")
const Type = require("./types.models")
const Users = require("./users.models")


const initModels = () => {
    
    Avatar.hasMany(Users, { foreignKey: "avatarId"})
    Users.belongsTo(Avatar,{foreignKey:"avatarId"})

    Users.hasMany(Participants, {foreignKey: "userId"})
    Participants.belongsTo(Users, {foreignKey: "userId"})

    Users.hasMany(Conversation, {foreignKey:"createdBy"})
    Conversation.belongsTo(Users, {foreignKey: "createdBy"})

    Users.hasMany(Messages, { foreignKey: "userId"})
    Messages.belongsTo(Users, {foreignKey: "userId"})

    Conversation.hasMany(Participants, {foreignKey: "conversationsId"})
    Participants.belongsTo(Conversation, {foreignKey: "conversationsId"})

    Messages.belongsTo(Conversation, {foreignKey: "conversationId"})
    Conversation.hasMany(Messages, {foreignKey: "conversationId"})
    

    Type.hasMany(Conversation, {foreignKey: "typeId"})
    Conversation.belongsTo(Type, { foreignKey: "typeId"})
    
}

module.exports = initModels;