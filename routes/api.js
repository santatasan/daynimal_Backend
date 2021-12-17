const router = require('express').Router();

const apiUsersRouter = require('./api/users');
const apiAnimalsRouter = require('./api/animals');
const apiCaresRouter = require('./api/cares');
const { checkToken } = require('../middlewares/checktoken');

router.use('/users', apiUsersRouter);
router.use('/animals', checkToken, apiAnimalsRouter);
router.use('/cares', checkToken, apiCaresRouter);

module.exports = router;