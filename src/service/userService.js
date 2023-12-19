const {User} = require('../models/index');

class UserService{
    
    async createUser (details){
        try {
            console.log(details);
            const user = await User.create({
                name : details.name,
                age : details.age,
                batch : details.batch,
                email : details.email,
                password : details.password
            });
            return user;
        } catch (error) {
            console.log('Something went wrong at Service layer.');
            throw error;
        }
    }
}

module.exports = UserService;