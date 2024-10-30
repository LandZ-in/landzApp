import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../style.css';

const CalendarCom = () => {
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'];

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setSelectedTime('');
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="calendar-time-container">
      <div className="calendar-section">
        <h2>Select a Date & Time for Schedule a Meeting</h2>
        <Calendar onChange={handleDateChange} value={date} />
        <div className="time-zone-container">
          <div className="time-zone-header">
            <Globe className="icon" />
            <span className="time-zone-text">Time zone</span>
          </div>
          <select className="select-box">
            <option>India Standard Time (IST)</option>
          </select>
        </div>
      </div>

      <div className="time-slot-section">
        <h3>Select a Time</h3>
        <div className="time-slots">
          {timeSlots.map((time, index) => (
            <div key={index} className="time-card">
              <button
                onClick={() => handleTimeSelection(time)}
                className={`time-button ${selectedTime === time ? 'selected' : ''}`}
              >
                {time}
              </button>
              {selectedTime === time && (
                <button className={`next-button ${selectedTime === time ? 'show' : ''}`}
                style={{ display: selectedTime === time ? 'inline' : 'none' }} > Next</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarCom;
