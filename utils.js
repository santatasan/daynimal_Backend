const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

const executeQuery = (query, data = []) => {
    return new Promise((resolve, reject) => {
        db.query(query, data, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    });
};

const executeQueryOne = (query, data = []) => {
    return new Promise((resolve, reject) => {
        db.query(query, data, (err, result) => {
            if (err) return reject(err);
            if (result.lenght === 0) return resolve(null);
            resolve(result[0]);
        })
    });
};

const createToken = (user) => {
    const obj = { userId: user.id, expiredAt: dayjs().add(5, 'days').unix() };
    return jwt.sign(obj, process.env.SECRET_KEY);
};

module.exports = { executeQuery, executeQueryOne, createToken };