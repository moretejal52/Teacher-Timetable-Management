const express = require('express');
const studcontroller = require('./controller');
const timetableController = require('./controller');

const router = express.Router(); // Corrected variable name

router.post('/register', studcontroller.adduser);
router.post('/submit', timetableController.submitForm);
router.get('/findall', timetableController.getdata);
router.get('/findall', studcontroller.getdata); // Corrected endpoint
router.get('/findOne/:username', timetableController.FindByUsername);
router.put('/update/:username', studcontroller.updateuser);
router.delete('/delete/:username', studcontroller.deleteuser);

module.exports = router;
