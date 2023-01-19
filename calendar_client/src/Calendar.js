import React, {useState} from 'react'
import dayjs from "dayjs"
import range from "lodash-es/range"

export default function Calendar() {

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    const today = dayjs()

    const [dayObj, setdayObj] = useState(dayjs())

    const nextMonth = () => {
        setdayObj(dayObj.add(1, "month"));
    };

    const prevMonth = () => {
        setdayObj(dayObj.subtract(1, "month"))
    }

    const dateFormat = "MMMM YYYY"

    const days = dayjs().daysInMonth()

    console.log(dayjs().daysInMonth());

  return (
    <div>
      <div className='calendar-header'>
        <button onClick={prevMonth}>{"<"}</button>
        {dayObj.format(dateFormat)}
        <button onClick={nextMonth}>{">"}</button>
      </div>
      <div className='weekday-container'>
        {weekdays.map((weekday, index) => <div key={index}>{weekday}</div>)}
      </div> 
      <div className='calendar-grid'>
        {range(days).map((day, index) => (
        <div className='calendar-body' key={index}>
            {day + 1}
        </div>
        ))}
      </div>   
      
    </div>
  )
}
