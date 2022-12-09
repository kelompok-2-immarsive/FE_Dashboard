import React from 'react'
import { useState } from 'react'

const NewlogPopUp = () => {
 const option=['Active', 'Join Class', 'Continue season 2','Continue season 3','Graduate', 'Placement']
  const [status, setStatus] = useState('')
  const [feedback, setFeedback] = useState('')

  return (
      <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative p-10 h-auto bg-white text-alta-primary" htmlFor="">
          <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-5 top-5">✕</label>
          <h3 className="text-2xl font-bold">Add New Log</h3>
          <p className="py-4 mb-7">Add Feedback for this Mentee</p>
          <div 
              // onSubmit={() => addLog(status,feedback)} 
              className='text-end'>
                  <select className="select border-alta-primary w-full bg-white text-alta-primary mb-3"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                      {
                          option.map( (opt,index) => {
                              return <option value={opt} key={index}>{opt}</option>
                          })
                      }
                  </select>
              <textarea
              type="text"
              className="textarea block p-2 pl-10 border-alta-primary caret-alta-primary w-full flex-1 bg-white"
              placeholder="Input Feedback"
              //   value={addClass}
                onChange={(e) => setFeedback(e.target.value)}
              required
              ></textarea>
              <div className="modal-action">
              <button type="submit" value='Add Class' className='btn bg-alta-primary border-none hover:bg-hover-primary mt-5' onClick={() => addLog(status, feedback)}>
                  <label className='text-white'
                      // htmlFor={`${addClass !== '' && 'my-modal-4'}`}
                      >Add New Log</label>
              </button>
              </div>
          </div>
          </label>
      </label>
      </>
  )
}

export default NewlogPopUp