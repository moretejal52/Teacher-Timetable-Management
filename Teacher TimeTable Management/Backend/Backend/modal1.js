// timetable.model.js

const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  day: { type: String, required: true },
  timeSlot: { type: String, required: true },
  subject: { type: String },
  teacher: { type: String },
});

const Timetable = mongoose.model('Timetable', timetableSchema);

module.exports = Timetable;
