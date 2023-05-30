const express = require('express');
const router = express.Router();
const cors = require('cors')
const controller = require('../controllers/passwordsController');

//*********************************************************** 
// Return a password
router.get('/', cors(), controller.getPassword);

//*********************************************************** 
// Create a new password
router.post('/', controller.createPassword);

//*********************************************************** 
// Delete a specific password
router.delete('/:passwordId', controller.deletePassword);

//*********************************************************** 
// Update existing cleaner
router.patch('/:passwordId', controller.updatePassword);

module.exports = router;