const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {

    if (!req.headers['authorization']) return res.status(401).json({ error: 'You must include the authorization header' });

    let obj;
    const token = req.headers['authorization'];
    try {
        obj = jwt.verify(token, process.env.SECRET_KEY);
    } catch (err) {
        return res.status(401).json({ error: 'Incorrect token' });
    }

    if (dayjs().unix() > obj.expiredAt) return res.status(401).json({ error: 'The token is expired' });

    req.user = obj.userId;

    next();
};

module.exports = { checkToken };