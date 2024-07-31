// src/components/PersonalTimetable.js

import React from 'react';

const PersonalTimetable = ({ personalTimetable }) => {
  return (
    <div>
      <h2>Personal Timetable</h2>
      <ul>
        {personalTimetable.map((entry) => (
          <li key={entry.id}>
            {entry.day} - {entry.time} - {entry.course}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalTimetable;
