// timetable.controller.js

const Timetable = require('./timetable.model');

// Controller to handle the submission of timetable data
const submitTimetable = async (req, res) => {
  const timetableData = req.body;

  try {
    // Loop through the timetableData and save each entry to the database
    for (const row of timetableData) {
      for (const cell of row) {
        const { day, timeSlot, subject, teacher } = cell;

        const newTimetableEntry = new Timetable({
          day,
          timeSlot,
          subject,
          teacher,
        });

        await newTimetableEntry.save();
      }
    }

    res.status(201).json({ message: 'Timetable data submitted successfully' });
  } catch (error) {
    console.error('Error submitting timetable data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { submitTimetable };
