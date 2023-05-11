import React, {useState} from 'react'
import './App.css';
import Calendar from './Calendar';
import Modal from "./ModalComponents/Modal"
import dayjs from "dayjs"

function App() {

  // const reminders = `http://127.0.0.1:3000/days`

  const list = [
    {
      id: 1, 
      reminder: "Off work", 
      date: "5/10/2023"
    }, 
    {
      id: 2,
      reminder: "Bday party", 
      date: "5/17/2023"
    },
    {
      id: 3,
      reminder: "Visit parents", 
      date: "5/30/2023"
    },
    {
      id: 4,
      reminder: "Take out trash out to street.", 
      date: "5/17/2023"
    },
    {
      id: 5,
      reminder: "Clean house.", 
      date: "5/5/2023"
    }, 
    // {
    //   id: 6,
    //   reminder: "Clean house.", 
    //   date: "5/17/2023"
    // }
  ]

  const [modalOpen, setModalOpen] = useState(false)
  const [remindersList, setRemindersList] = useState(list)
  const dayObj = dayjs()


  const thisYear = dayObj.year()
  const thisMonth = dayObj.month()

  const toggleModal = (day) => {
    setModalOpen(!modalOpen)
    // console.log(day);
    console.log(`${thisMonth + 1}/${day}/${thisYear}`)
  }

  return (
    <div className="App">
      <Calendar 
        toggleModal={toggleModal} 
        remindersList={remindersList} 
        setRemindersList={setRemindersList}
      /> 
      {modalOpen && <Modal closeModal={setModalOpen}/>}
    </div>
  );
}

export default App;
