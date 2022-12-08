import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import api from '../Services/api'
const EditPopUp = ({editClass, setClass, onSubmitHandler}) => {

    const location = useLocation()
    const data = location?.state?.data
    // const [className, setClassName] = useState(data.editClass)

    // const updateClass = async () => {
    //     await api. updateClassList(cookie, token)
    //       .then((response) => {
    //         setLoading(true)
    //         setListClass(response.data.data)
    //         setLoading(false)
    //       })
    //       .catch((error) => {
    //         console.log(error)
    //       })
    //   }
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <label htmlFor="my-modal-5" className="modal cursor-pointer">
        <label className="modal-box relative p-10 h-auto" htmlFor="">
          <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-5 top-5">✕</label>
          <h3 className="text-2xl font-bold">Edit Class</h3>
          <p className="py-5 mb-7">Edit Already Existing Class</p>
          <form onSubmit={onSubmitHandler} className='text-end'>
            <input
              type="text"
              className="block p-2 pl-10 input input-bordered border-alta-primary caret-alta-primary w-full flex-1 bg-white"
              placeholder="Input Nama Kelas"
              value={editClass}
              onChange={setClass}
              required={true}
            />
            <div className="modal-action">
              <button type="submit" value='Add Class' className='btn bg-alta-primary border-none hover:bg-hover-primary mt-5'>
                {/* <label htmlFor={`${addClass !== '' && 'my-modal-5'}`}>Edit Class</label> */}
              </button>
            </div>
          </form>
        </label>
      </label>
    </>
  )
}

export default EditPopUp