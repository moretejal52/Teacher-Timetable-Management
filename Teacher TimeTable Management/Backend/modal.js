const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  fullName: String,
  department: String,
  qualification:String,
  
  username: String,
  password: String,
  mobileNumber: String,
});

const timetableSchema = new mongoose.Schema({
  day: { type: String, required: true },
  teacherName: { type: String, required: true },
  teacherUsername: { type: String, required: true },
  division: { type: String, required: true },
  year: { type: String, required: true },
  lectures: [
    {
      startTime: { type: String, required: true },
      endTime: { type: String, required: true },
      subject: { type: String, required: true },
    },
  ],
});

const Student = mongoose.model('Student', studentSchema); // Rename the model to 'Student'
const Timetable = mongoose.model('Timetable', timetableSchema);

module.exports = { Student, Timetable }; // Export both models
