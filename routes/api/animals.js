const { create, getAll, checkAnimal } = require('../../models/animals.model');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.json(await getAll(req.user));
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});


router.post('/', async (req, res) => {
    try {
        const arrAnimals = await checkAnimal({ name: req.body.name, gender: req.body.gender, userId: req.user });
        (arrAnimals.length !== 0) ? res.status(401).json({ error: 'Un animal con mismo nombre y género está registrado.' }) : res.json(await create({ ...req.body, fk_user: req.user })); //TODO ver que estatus poner.
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

module.exports = router;