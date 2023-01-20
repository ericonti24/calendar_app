import React, {useState} from 'react'
import dayjs from "dayjs"
import range from "lodash-es/range"

export default function Calendar() {

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    const today = dayjs()

    const [dayObj, setdayObj] = useState(dayjs())
    
    const daysInMonth = dayObj.daysInMonth()

    const nextMonth = () => {
        setdayObj(dayObj.add(1, "month"));
    };

    const prevMonth = () => {
        setdayObj(dayObj.subtract(1, "month"))
    }

    const dateFormat = "MMMM YYYY"

    const currentDate = () => {
      setdayObj(dayjs())
    }

    console.log();

  return (
    <div>
      
      <div className='calendar-header'>
        <button onClick={prevMonth}>&lt;</button>
        &nbsp;
        <button onClick={currentDate}>Today</button>
        &nbsp;
        <button onClick={nextMonth}>&gt;</button>
      </div>

      <div className='month-year-header'>{dayObj.format(dateFormat)}</div>

      <div className='weekday-container'>
        {weekdays.map((weekday, index) => <div key={index}>{weekday}</div>)}
      </div> 

      <div className='calendar-grid'>
        {range(daysInMonth).map((day, index) => (
        <div className='calendar-body' key={index}>
            {day + 1}
        </div>
        ))}
      </div>   
      
    </div>
  )
}
