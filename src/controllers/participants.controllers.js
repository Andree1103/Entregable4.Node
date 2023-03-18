const ParticipantsService = require("../services/participants.service");

const getParticipanteWithConver = async(req,res,next) => {
    try {
        const {iduser} = req.params;
        const participants = await ParticipantsService.participantsWithConver(iduser);
        res.json(participants)
    } catch (error) {
        next(error);
    }
}

const getParticipantsAndMessages = async(req,res,next) =>{
    try {
        const {idParticipants} = req.getParticipantsAndMessages;
        const participantsAndMessages = await ParticipantsService.participantsAndMessages(idParticipants);
        res.json(participantsAndMessages);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getParticipanteWithConver,
    getParticipantsAndMessages
}