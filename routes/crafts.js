const express = require('express');
const router = express.Router();
const cors = require('cors')
const controller = require('../controllers/craftsController');

//*********************************************************** 
// Return all crafts
router.get('/', cors(),  controller.getAllCrafts);

//*********************************************************** 
// Get a specific craft by id
router.get('/:craftId', controller.getCraftById);

//*********************************************************** 
// Create a new craft
router.post('/', controller.createCraft);

//*********************************************************** 
// Delete a specific craft
router.delete('/:craftId', controller.deleteCraft);

//*********************************************************** 
// Update existing craft
router.patch('/:craftId', controller.updateCraft);

module.exports = router;