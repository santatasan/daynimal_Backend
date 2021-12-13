const { executeQuery, executeQueryOne } = require('../utils');

const create = ({ name, gender, specie, breed, size, color, weight, w_unit, spayed, birthday, image, fk_user }) => executeQuery('insert into animals (name, gender, specie, breed, size, color, weight, w_unit, spayed, birthday, image, fk_user) values (?,?,?,?,?,?,?,?,?,?,?,?)', [name, gender, specie, breed, size, color, weight, w_unit, spayed, birthday, image, fk_user]);

const getAll = (userId) => executeQuery('select * from animals where fk_user = ?', [userId]);

const checkAnimal = ({ userId, name, gender }) => executeQuery('select id from animals where name = ? and gender = ? and fk_user = ?', [name, gender, userId]);

module.exports = { create, getAll, checkAnimal };