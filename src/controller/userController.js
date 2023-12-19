const UserService = require('../service/userService');

const userService = new UserService();

const createUser = async (req, res) =>{
    try {
        const user = await userService.createUser({
            name : req.body.name,
            age : req.body.age,
            batch : req.body.batch,
            email : req.body.email,
            password : req.body.password
        });
        return res.status(201).json({
            data: user,
            success : true,
            message : "Successfully registered the user.",
            error : {}
        });
    } catch (error) {
        return res.status(500).json({
            data: [],
            success : false,
            message : 'Internal Server Error',
            error: error
        });
    }
};

module.exports = {
    createUser
}