const { getAllByAnimal, create, update, delVetVisit } = require('../../models/vetVisits.model');

const router = require('express').Router();

router.get('/:animalId', async (req, res) => {
    try {
        res.json(await getAllByAnimal(req.params.animalId));
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

router.put('', async (req, res) => {
    try {
        res.json(await update(req.body));
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

router.post('/:animalId', async (req, res) => {
    try {
        res.json(await create({ ...req.body, fk_animal: req.params.animalId, fk_user: req.user }));
    } catch (err) {
        console.log(err.message)
        res.status(401).json({ error: err.message });
    }
});

router.delete('/:vetVisitId', async (req, res) => {
    try {
        res.json(await delVetVisit(req.params.vetVisitId));
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

module.exports = router;