const { getAllReminders, getAllRemindersByType, getAllRemindersByAnimal, updateReminder, createReminder, delReminder } = require('../../models/reminders.model');

const router = require('express').Router();

router.get('', async (req, res) => {
    try {
        res.json(await getAllReminders(req.user));
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

router.get('/type/:type', async (req, res) => {
    try {
        res.json(await getAllRemindersByType(req.params.type, req.user));
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

router.get('/animal/:animalId', async (req, res) => {
    try {
        res.json(await getAllRemindersByAnimal(req.params.animalId));
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

router.put('', async (req, res) => {
    try {
        res.json(await updateReminder(req.body));
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

router.post('/:animalId', async (req, res) => {
    try {
        res.json(await createReminder({ ...req.body, fk_animal: req.params.animalId, fk_user: req.user }));
    } catch (err) {
        console.log(err.message)
        res.status(401).json({ error: err.message });
    }
});

router.delete('/:reminderId', async (req, res) => {
    try {
        res.json(await delReminder(req.params.reminderId));
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});


module.exports = router;