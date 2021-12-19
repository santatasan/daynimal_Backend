const { getAllRemainders, getAllRemaindersByType, getAllRemaindersByAnimal, updateRemainder, createRemainder, delRemainder } = require('../../models/remainders.model');

const router = require('express').Router();

router.get('', async (req, res) => {
    try {
        res.json(await getAllRemainders(req.user));
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

router.get('/type/:type', async (req, res) => {
    try {
        res.json(await getAllRemaindersByType(req.params.type, req.user));
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

router.get('/animal/:animalId', async (req, res) => {
    try {
        res.json(await getAllRemaindersByAnimal(req.params.animalId));
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

router.put('', async (req, res) => {
    try {
        res.json(await updateRemainder(req.body));
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

router.post('/:animalId', async (req, res) => {
    try {
        res.json(await createRemainder({ ...req.body, fk_animal: req.params.animalId, fk_user: req.user }));
    } catch (err) {
        console.log(err.message)
        res.status(401).json({ error: err.message });
    }
});

router.delete('/:remainderId', async (req, res) => {
    try {
        res.json(await delRemainder(req.params.remainderId));
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});


module.exports = router;