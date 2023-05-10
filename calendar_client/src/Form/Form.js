import React, {useState} from 'react'
import "../ModalComponents/Modal.css"

function Form({addReminder}) {

    const [userInput, setUserInput] = useState("")

    const handleReminderEntry = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      addReminder(userInput)
      setUserInput("")
    }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <input
            placeholder='Add Reminder'
            value={userInput}
            onChange={handleReminderEntry}
        />
        <button>Add Reminder</button>
      </form>
    </div>
  )
}

export default Form
