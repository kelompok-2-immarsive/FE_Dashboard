import React from 'react'
import { useState } from 'react'

const PopUp = ({display, hiddenPopup, createClass }) => {

  const [addClass, setAddClass] = useState('')

  const data = {
    class_name: addClass
  }

  const addClasses = () => {
    console.log(data)
  }

  

  return (
    <div className={`w-screen h-screen absolute top-[-20%] left-[-20%] bg-[#0000007d] ${display} flex justify-center pt-10`}>
        <div onSubmit={() => addClasses()} className="card w-1/2 h-1/3 bg-white text-neutral-content p-10 shadow-xl rounded-xl text-alta-primary">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2"
        onClick={() => hiddenPopup()}>✕</label>
            <div className="card-body items-center text-center">
            <input
                type="text"
                className="block p-2 pl-10 input input-bordered border-alta-primary caret-alta-primary w-full bg-white"
                placeholder="Input Nama Kelas"
                change={(e) => setAddClass(e.target.value)}

            />
            <div className="card-actions flex justify-end mt-5">
                <button className="btn bg-alta-secondary hover:bg-hover-secondary text-white"
                onClick={() => hiddenPopup()}>Cancel</button>
                <button onClick={() => createClass()} type='submit' className="btn bg-alta-primary hover:bg-hover-primary text-white">Add Class</button>
            </div>
        </div>
        </div>
    </div> 
  )
}

export default PopUp