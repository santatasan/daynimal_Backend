const { executeQuery } = require("../utils");

const getAllRemindersByAnimal = (animalId) => executeQuery('select * from reminders where fk_animal = ? order by reminders.date asc', [animalId]);

const getAllRemindersByType = (type, userId) => executeQuery('select * from reminders where type = ? and fk_user = ? order by reminders.date asc', [type, userId]);

const getAllReminders = (userId) => executeQuery('select * from reminders where fk_user = ? order by reminders.date asc', [userId]);

const createReminder = ({ description, type, date, animal, fk_animal, fk_user }) => executeQuery('insert into reminders (description, type, date, animal, fk_animal, fk_user) values (?,?,?,?,?,?)', [description, type, date, animal, fk_animal, fk_user]);

const updateReminder = ({ description, type, date, animal, id }) => executeQuery('update reminders set description = ?, type = ?, date = ?, animal = ? where id = ?', [description, type, date, animal, id]);

const delReminder = (id) => executeQuery('delete from reminders where id= ?', [id]);

const delAllRemindersByAnimal = (animalId) => executeQuery('delete from reminders where fk_animal = ?', [animalId]);

const delAllRemindersByUser = (userId) => executeQuery('delete from reminders where fk_user = ?', [userId]);

module.exports = { getAllReminders, getAllRemindersByAnimal, getAllRemindersByType, createReminder, updateReminder, delReminder, delAllRemindersByAnimal, delAllRemindersByUser };