const express = require('express');
const polygonsController = require('../controllers/polygonsController');

const router = express.Router();

// Polygons Routes
router.post('/polygons', polygonsController.createPolygon);
router.get('/polygons', polygonsController.getPolygons);
router.put('/polygons/:id', polygonsController.updatePolygon);

module.exports = router;