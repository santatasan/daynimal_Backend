const { executeQuery } = require('../utils');

const getAllByType = ({ animalId, type }) => executeQuery('select * from cares where fk_animal = ? and type = ? order by cares.date desc', [animalId, type]);

const create = ({ type, date, notes, place, fk_animal, fk_user }) => executeQuery('insert into cares (type, date, notes, place, fk_animal, fk_user) values (?,?,?,?,?,?)', [type, date, notes, place, fk_animal, fk_user]);

const update = ({ type, date, notes, place, id }) => executeQuery('update cares set type = ?, date = ?, notes = ?, place = ? where id = ?', [type, date, notes, place, id]);

const delCare = (careId) => executeQuery('delete from cares where id= ?', [careId]);

const delAllCaresByAnimal = (animalId) => executeQuery('delete from cares where fk_animal = ?', [animalId]);

const delAllCaresByUser = (userId) => executeQuery('delete from cares where fk_user = ?', [userId]);

module.exports = { getAllByType, create, update, delCare, delAllCaresByAnimal, delAllCaresByUser };