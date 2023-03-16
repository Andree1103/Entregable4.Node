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

module.exports = {
    getParticipanteWithConver
}