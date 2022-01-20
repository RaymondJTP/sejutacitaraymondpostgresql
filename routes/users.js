const router = require('express').Router()
const userController = require('../controllers/userController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/login', userController.loginUser)
// router.use(authentication)
router.get('/', userController.listUser)
// router.use(authorization)
router.post('/', userController.createUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)


module.exports = router