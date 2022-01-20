const {User} = require('../models')
const {verifyToken} = require('../helpers/jwt') 

const authentication = async(req,res,next) => {
    try {
        const{access_token} = req.headers

        if(!access_token){
            throw {name: 'Unauthorized'}
        }

        const tokenPayLoad = verifyToken(access_token)
        
        const getUser = await User.findOne({where:{email:tokenPayLoad.email}})
        
        if(!getUser){
            throw{name: 'Unauthorized'}
        }

        req.user = {
            id: getUser.id,
            email: getUser.email,
            role: getUser.role
        }
        next()

    } catch (err) {
        next(err)
    }
}

module.exports = authentication