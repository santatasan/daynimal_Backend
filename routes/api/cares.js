const { create } = require('../../models/cares.model');
const { getAllByType } = require('../../models/cares.model');

const router = require('express').Router();

router.get('/:animalId/:type', async (req, res) => {
    try {
        res.json(await getAllByType({ animalId: req.params.animalId, type: req.params.type }));
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

router.post('/:animalId', async (req, res) => {
    try {
        res.json(await create({ ...req.body, fk_animal: req.params.animalId }));
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

module.exports = router;