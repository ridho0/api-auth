const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/signup', userController.signup );
router.post('/signin', userController.signin );

router.get('/users', userController.getAll );
router.get('/users/:id', userController.getById );
router.post('/users/', userController.createUser );
router.delete('/users/:id', userController.deleteById );
router.put('/users/:id', userController.updateById );

module.exports = router;
