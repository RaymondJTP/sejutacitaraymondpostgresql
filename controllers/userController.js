const {User} = require('../models/index')
const {signToken} = require('../helpers/jwt')
const {comparePassword} = require('../helpers/bcrypt')

class Controller{
    static async loginUser(req,res,next){
        try {
            const {email,password} = req.body
            const user = await User.findOne({
                where : {email}
            })
    
            if(!user) throw (err)
           
            let isValidPassword = comparePassword(password,user.password) || password == user.password
            if(!isValidPassword) throw (err)
            let tokenPayLoad = {id: user.id, email: user.email}
            let access_token = signToken(tokenPayLoad)
 
            res.status(200).json({message: 'Login Success', access_token, user})

        } catch (err) {
            console.log(err);
        }
    }
    
    static listUser(req,res,next){
        
    }
    
    static async createUser(req,res,next){
        try {
            const {username,email,password,role,address} = req.body
            const result = await User.create({username,email,password, role,address})
            res.status(201).json(result)
            
        } catch (err) {
            console.log(err);
        }
    }

    static updateUser(req,res,next){

    }

    static deleteUser(req,res,next){

    }
}

module.exports = Controller