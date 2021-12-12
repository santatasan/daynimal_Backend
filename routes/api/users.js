const router = require('express').Router();
const bcrypt = require('bcryptjs');

const { checkToken } = require('../../middlewares/checktoken');
const { create, getByEmail, getById, update } = require('../../models/users.model');
const { createToken } = require('../../utils');


router.get('/', checkToken, async (req, res) => {
    try {
        res.json(await getById(req.user));
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

router.put('/', checkToken, async (req, res) => {
    try {
        if (!req.body.check_pass) {
            await update({ username: req.body.username, password: req.body.password, id: req.user });
            res.json({ updated: true });
        } else {
            const user = await getById(req.user);
            bcrypt.compareSync(req.body.last_password, user.password) ? (
                req.body.password = bcrypt.hashSync(req.body.password),
                await update({ username: req.body.username, password: req.body.password, id: req.user }),
                res.json({ updated: true })
            ) : res.status(401).json({ error: 'Email and/or password are wrong' });
        };
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

router.post('/register', async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password);

        res.json(await create(req.body));
    } catch (err) {
        res.status(401).json({ error: err.message });
    };
});

router.post('/login', async (req, res) => {
    try {
        // exists the email in db?
        const user = await getByEmail(req.body.email);
        if (!user) return res.status(401).json({ error: 'Email and/or password are wrong' });

        // do the passwords match?
        bcrypt.compareSync(req.body.password, user.password) ? res.json({ token: createToken(user) }) : res.status(401).json({ error: 'Email and/or password are wrong' });
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

module.exports = router;