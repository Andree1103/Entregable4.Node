const UsersService = require("../services/user.service");

const createUser = async(req, res, next)=> {
    try {
        const newUser= req.body
        const result = await UsersService.create(newUser);
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
}

const getAllUsers = async(req,res,next)=> {
    try {
        const users = await UsersService.getAll();
        res.json(users);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createUser,
    getAllUsers
}