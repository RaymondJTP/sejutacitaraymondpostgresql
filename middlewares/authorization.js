const authorization = async (req,res,next) => {
    try {
        console.log(req.user);
        if(req.user.role !== 'customer'){
            throw{name : 'You cant access'}
        }

        next()
    } catch (err) {
        next(err)
    }
}

module.exports = authorization