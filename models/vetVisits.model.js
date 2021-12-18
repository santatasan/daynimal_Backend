const { executeQuery } = require("../utils");

const getAllByAnimal = (animalId) => executeQuery('select * from vetVisits where fk_animal = ? order by vetVisits.date desc', [animalId]);

const create = ({ vet, notes, date, price, fk_animal, fk_user }) => executeQuery('insert into vetVisits (vet, notes, date, price ,fk_animal, fk_user) values (?,?,?,?,?,?)', [vet, notes, date, price, fk_animal, fk_user]);

const update = ({ vet, notes, date, price, id }) => executeQuery('update vetVisits set vet = ?, notes = ?, date = ?, price = ? where id = ?', [vet, notes, date, price, id]);

const delVetVisit = (id) => executeQuery('delete from vetVisits where id= ?', [id]);

const delAllVetVisitsByAnimal = (animalId) => executeQuery('delete from vetVisits where fk_animal = ?', [animalId]);

const delAllVetVisitsByUser = (userId) => executeQuery('delete from vetVisits where fk_user = ?', [userId]);


module.exports = { getAllByAnimal, create, update, delVetVisit, delAllVetVisitsByAnimal, delAllVetVisitsByUser };