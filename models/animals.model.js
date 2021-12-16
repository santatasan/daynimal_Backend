const { executeQuery, executeQueryOne } = require('../utils');

const create = ({ name, gender, specie, breed, size, color, weight, w_unit, spayed, birthday, image, fk_user }) => executeQuery('insert into animals (name, gender, specie, breed, size, color, weight, w_unit, spayed, birthday, image, fk_user) values (?,?,?,?,?,?,?,?,?,?,?,?)', [name, gender, specie, breed, size, color, weight, w_unit, spayed, birthday, image, fk_user]);

const getAll = (userId) => executeQuery('select * from animals where fk_user = ?', [userId]);

const getById = (animalId) => executeQueryOne('select * from animals where id = ?', [animalId]);

const checkAnimal = ({ userId, name, gender }) => executeQuery('select id from animals where name = ? and gender = ? and fk_user = ?', [name, gender, userId]);

const update = ({ name, gender, specie, breed, size, color, weight, w_unit, spayed, birthday, image, animalId }) => executeQueryOne('update animals set name= ?, gender= ?, specie= ?, breed= ?, size= ?, color= ?, weight= ?, w_unit= ?, spayed= ?, birthday= ?, image= ? where id = ?', [name, gender, specie, breed, size, color, weight, w_unit, spayed, birthday, image, animalId]);

const delAnimal = (animalId) => executeQuery('delete from animals where id= ?', [animalId]);

const delAllAnimals = (userId) => executeQuery('delete from animals where fk_user = ?', [userId]);

module.exports = { create, getAll, checkAnimal, getById, update, delAnimal, delAllAnimals };