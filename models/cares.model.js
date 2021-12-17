const { executeQuery, executeQueryOne } = require('../utils');

const getAllByType = ({ animalId, type }) => executeQuery('select * from cares where fk_animal = ? and type = ? order by cares.date desc', [animalId, type]);

const create = ({ type, date, notes, place, fk_animal }) => executeQuery('insert into cares (type, date, notes, place, fk_animal) values (?,?,?,?,?)', [type, date, notes, place, fk_animal]);

const update = ({ type, date, notes, place, id }) => executeQuery('update cares set type = ?, date = ?, notes = ?, place = ? where id = ?', [type, date, notes, place, id]);

module.exports = { getAllByType, create, update };