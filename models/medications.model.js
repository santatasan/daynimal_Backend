const { executeQuery } = require("../utils");

const getAllByAnimal = (animalId) => executeQuery('select * from medications where fk_animal = ? order by medications.finished asc, medications.finish asc', [animalId]);

const create = ({ name, dosage, repetition, r_unit, start, finish, finished, fk_animal, fk_user }) => executeQuery('insert into medications (name, dosage, repetition, r_unit, start, finish, finished ,fk_animal, fk_user) values (?,?,?,?,?,?,?,?,?)', [name, dosage, repetition, r_unit, start, finish, finished, fk_animal, fk_user]);

const update = ({ name, dosage, repetition, r_unit, start, finish, finished, id }) => executeQuery('update medications set name = ?, dosage = ?, repetition = ?, r_unit = ?, start = ?, finish = ?, finished = ? where id = ?', [name, dosage, repetition, r_unit, start, finish, finished, id]);

const delMedication = (id) => executeQuery('delete from medications where id= ?', [id]);

const delAllMedicationsByAnimal = (animalId) => executeQuery('delete from medications where fk_animal = ?', [animalId]);

const delAllMedicationsByUser = (userId) => executeQuery('delete from medications where fk_user = ?', [userId]);

module.exports = { getAllByAnimal, create, update, delMedication, delAllMedicationsByAnimal, delAllMedicationsByUser };