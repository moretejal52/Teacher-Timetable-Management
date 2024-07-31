// timetable.route.js

const express = require('express');
const router = express.Router();
const timetableController = require('./timetable.controller');

// Route to handle the submission of timetable data
router.post('/submit', timetableController.submitTimetable);

module.exports = router;
