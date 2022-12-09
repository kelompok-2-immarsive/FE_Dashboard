import React from 'react'
import { useState } from 'react'

const NewlogPopUp = ({ onChangeSelect, comment, setComment, status_feedback, onSubmitFeedback }) => {
    const option = ['Active', 'Join Class', 'Continue season 2', 'Continue season 3', 'Graduate', 'Placement']

    return (
        <>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative p-10 h-auto bg-white text-alta-primary" htmlFor="">
                    <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-5 top-5">✕</label>
                    <h3 className="text-2xl font-bold">Add New Log</h3>
                    <p className="py-4 mb-7">Add Feedback for this Mentee</p>
                    <form
                        // onSubmit={() => addLog(status,feedback)}
                        onSubmit={onSubmitFeedback}
                        className='text-end'>
                        <select className="select border-alta-primary w-full bg-white text-alta-primary mb-3"
                            onChange={onChangeSelect}
                            value={status_feedback}
                        >
                            <option>Please choose one option</option>
                            {
                                option.map((opt, index) => {
                                    return <option value={opt} key={index}>{opt}</option>
                                })
                            }
                        </select>
                        <textarea
                            className="textarea block p-2 pl-10 border-alta-primary caret-alta-primary w-full flex-1 bg-white"
                            placeholder="Input Feedback"
                            value={comment}
                            onChange={setComment}
                            required
                        >{comment}</textarea>
                        <div className="modal-action">
                            <button type="submit" value='Add Class' className='btn bg-alta-primary border-none hover:bg-hover-primary mt-5'>
                                <label className='text-white'
                                htmlFor={`${comment !== '' && 'my-modal-4'}`}
                                >Add New Log</label>
                            </button>
                        </div>
                    </form>
                </label>
            </label>
        </>
    )
}

export default NewlogPopUp