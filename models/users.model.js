const { executeQuery, executeQueryOne } = require('../utils');

const create = ({ username, email, password }) => executeQuery('insert into users (username, email, password) values (?,?,?)', [username, email, password]);

const getByEmail = (email) => executeQueryOne('select * from users where email = ?', [email]);

const getById = (userId) => executeQueryOne('select * from users where id = ?', [userId]);

const update = ({ username, password, id }) => executeQueryOne('update users set username= ?, password= ? where id = ?', [username, password, id]);

const delUser = (userId) => executeQuery('delete from users where id= ?', [userId]);

module.exports = { create, getByEmail, getById, update, delUser };