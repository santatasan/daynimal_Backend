const router = require('express').Router();

const apiUsersRouter = require('./api/users');
const apiAnimalsRouter = require('./api/animals');
const apiCaresRouter = require('./api/cares');
const apiVetVisitsRouter = require('./api/vetVisits');
const apiMedicationsRouter = require('./api/medications');
const apiRemindersRouter = require('./api/reminders');
const { checkToken } = require('../middlewares/checktoken');

router.use('/users', apiUsersRouter);
router.use('/animals', checkToken, apiAnimalsRouter);
router.use('/cares', checkToken, apiCaresRouter);
router.use('/vetvisits', checkToken, apiVetVisitsRouter);
router.use('/medications', checkToken, apiMedicationsRouter);
router.use('/reminders', checkToken, apiRemindersRouter);

module.exports = router;