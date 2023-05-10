import React, {useState} from 'react'
import dayjs from "dayjs"
import range from "lodash-es/range"
import './App.css';


export default function Calendar({toggleModal, remindersList, setRemindersList}) {

    const todayObj = dayjs()

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    const [dayObj, setdayObj] = useState(dayjs())

    const thisYear = dayObj.year()
    const thisMonth = dayObj.month()
    const daysInMonth = dayObj.daysInMonth()

    const daysOfLastMonth = dayjs(`${thisYear} ${thisMonth + 1}-`)
    const weekDayOfLastMonth = daysOfLastMonth.day()

    const daysOfNextMonth = dayjs(`${thisYear} ${thisMonth + 1} ${daysInMonth}`)
    const weekDayOfNextMonth = daysOfNextMonth.day()


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

    const getRemindersForSingleDay = (calendarDate) => {
      const val = remindersList.filter(object => object.date === calendarDate)
      console.log(val);
      return val.map(r => <li key={r.id}>{r.reminder}</li>)
    }
    
  return (
    <div>
      <div className='calendar-header'>
        <div className='calendar-header-buttons'>
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
      </div>
      
      <div className='calendar-grid'>

        {/* last days of previous month */}
        {range(weekDayOfLastMonth).map((i, index) => (
          <div className='calendar-body--prev-month--faded' key={index}>
            {daysOfLastMonth.subtract(weekDayOfLastMonth - i, "day").date()}
          </div>
        ))}

        {/* hightlights the number of current day */}
        {range(daysInMonth).map((dayOfMonth, index) => {
          const formattedDate = `${thisMonth +1}/${dayOfMonth+1}/${thisYear}`
          console.log(formattedDate);
          return(
          <div className='calendar-card' key={index} id={index} onClick={() => toggleModal(dayOfMonth + 1)}>
            <div className={`calendar-card-day${
              dayOfMonth + 1 === dayObj.date() &&
              thisMonth === todayObj.month() &&
              thisYear === todayObj.year()
                ? " highlight"
                : ""
              }`}
              key={index}
            >
              {dayOfMonth + 1}
              
            </div>
            <div className='calendar-card-body'>
              {getRemindersForSingleDay(formattedDate)}
            </div>
            
          </div>
        )})}

        {/* first days of next month */}
        {range(6 - weekDayOfNextMonth).map((i, index) => (
          <div className='calendar-body--next-month--faded' key={index}>
            {daysOfNextMonth.add(i + 1, "day").date()}
          </div>
        ))}

      </div> 
    </div>
  )
}







