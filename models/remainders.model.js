const { executeQuery } = require("../utils");

const getAllRemaindersByAnimal = (animalId) => executeQuery('select * from remainders where fk_animal = ? order by remainders.date asc', [animalId]);

const getAllRemaindersByType = (type, userId) => executeQuery('select * from remainders where type = ? and fk_user = ? order by remainders.date asc', [type, userId]);

const getAllRemainders = (userId) => executeQuery('select * from remainders where fk_user = ? order by remainders.date asc', [userId]);

const createRemainder = ({ description, type, date, animal, fk_animal, fk_user }) => executeQuery('insert into remainders (description, type, date, animal, fk_animal, fk_user) values (?,?,?,?,?,?)', [description, type, date, animal, fk_animal, fk_user]);

const updateRemainder = ({ description, type, date, animal, id }) => executeQuery('update remainders set description = ?, type = ?, date = ?, animal = ? where id = ?', [description, type, date, animal, id]);

const delRemainder = (id) => executeQuery('delete from remainders where id= ?', [id]);

const delAllRemaindersByAnimal = (animalId) => executeQuery('delete from remainders where fk_animal = ?', [animalId]);

const delAllRemaindersByUser = (userId) => executeQuery('delete from remainders where fk_user = ?', [userId]);

module.exports = { getAllRemainders, getAllRemaindersByAnimal, getAllRemaindersByType, createRemainder, updateRemainder, delRemainder, delAllRemaindersByAnimal, delAllRemaindersByUser };