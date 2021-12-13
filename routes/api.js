const router = require('express').Router();

const apiUsersRouter = require('./api/users');
const apiAnimalsRouter = require('./api/animals');
const { checkToken } = require('../middlewares/checktoken');

router.use('/users', apiUsersRouter);
router.use('/animals', checkToken, apiAnimalsRouter);

module.exports = router;