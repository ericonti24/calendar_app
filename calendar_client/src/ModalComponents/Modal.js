import React from 'react'
import "./Modal.css"
import Form from "../Form/Form"

function Modal({closeModal, addReminder}) {

    const handleCloseModalButton = () => {
        closeModal(false)
    }

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
        {/* <button onClick={handleCloseModalButton}> X </button> */}
        </div>
        <div className='title'>
            <h1>Reminder:</h1>
            Date
        </div>
        <div className='body'>
            {/* <p>List of reminders.</p> */}
            
            
            <Form addReminder={addReminder}/>
            
        </div>
        <div className='footer'>
            <button onClick={handleCloseModalButton} id="cancelBtn">Cancel</button>
            {/* <button>Submit</button> */}
        </div>
      </div>
    </div>
  )
}

export default Modal
