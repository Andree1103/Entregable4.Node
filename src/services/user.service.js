const Avatar = require("../models/avatar.models");
const Users = require("../models/users.models");


class UsersService {
    static async create (newUser) {
        try {
            const user = await Users.create(newUser);
            return user;
        } catch (error) {
            throw error;
        }
    }

    static async getAll() {
        try {
            const result = await Users.findAll({
                attributes: ['username', 'firstname','lastname','email'],
                include: {
                    model:Avatar,
                    attributes:['id','image']
                }
            })
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UsersService;