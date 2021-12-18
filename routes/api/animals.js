const { create, getAll, checkAnimal, getById, update, delAnimal } = require('../../models/animals.model');
const { delAllCaresByAnimal } = require('../../models/cares.model');
const { delAllMedicationsByAnimal } = require('../../models/medications.model');
const { delAllVetVisitsByAnimal } = require('../../models/vetVisits.model');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.json(await getAll(req.user));
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

router.get('/:animalId', async (req, res) => {
    try {
        res.json(await getById(req.params.animalId));
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

router.put('/:animalId', async (req, res) => {
    try {
        const animal = await getById(req.params.animalId);
        const arrAnimals = await checkAnimal({ name: req.body.name, gender: req.body.gender, userId: req.user });
        if (animal.name === req.body.name && animal.gender === req.body.gender) {
            await update({ ...req.body, animalId: req.params.animalId });
            res.json({ updated: true });
        } else if (arrAnimals.length !== 0) {
            res.status(401).json({ error: 'An animal with this name and gender exists for this user.' });
        } else {
            await update({ ...req.body, animalId: req.params.animalId });
            res.json({ updated: true });
        };
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});


router.post('/', async (req, res) => {
    try {
        const arrAnimals = await checkAnimal({ name: req.body.name, gender: req.body.gender, userId: req.user });
        (arrAnimals.length !== 0) ? res.status(401).json({ error: 'An animal with this name and gender exists for this user.' }) : res.json(await create({ ...req.body, fk_user: req.user })); //TODO ver que estatus poner.
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

router.delete('/:animalId', async (req, res) => {
    try {
        await delAnimal(req.params.animalId);
        await delAllVetVisitsByAnimal(req.params.animalId);
        await delAllMedicationsByAnimal(req.params.animalId);
        res.json(await delAllCaresByAnimal(req.params.animalId));
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

module.exports = router;