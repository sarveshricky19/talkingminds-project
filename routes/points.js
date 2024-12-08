const express = require('express');
const pointsController = require('../controllers/pointsController');

const router = express.Router();

// Points Routes
router.post('/points', pointsController.createPoint);
router.get('/points', pointsController.getPoints);
router.put('/points/:id', pointsController.updatePoint);

module.exports = router;