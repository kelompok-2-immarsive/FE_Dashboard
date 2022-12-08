import React from 'react'

const PopUp = ({ onSubmitHandler }) => {
  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative p-10 h-auto" htmlFor="">
        <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-5 top-5">✕</label>
          <h3 className="text-2xl font-bold">Add New Class</h3>
          <p className="py-4 mb-7">Add new class with full name class and batch</p>
          <form onSubmit={onSubmitHandler} className='text-end'>
            <input
              type="text"
              className="block p-2 pl-10 input input-bordered border-alta-primary caret-alta-primary w-full flex-1 bg-white"
              placeholder="Input Nama Kelas"
            />
            <input type="submit" value='Add Class' className='btn bg-alta-primary border-none hover:bg-hover-primary mt-5' />
          </form>
        </label>
      </label>
    </>
  )
}

export default PopUp