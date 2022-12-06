import React from 'react'

const Input = ({label, type,placeholder, pattern = null, change }) => {
  return (
    <div className='flex items-center mt-2'>
        <label className='label-text text-xl w-[30%] text-black-default'>{label}</label>
        <input
          type={type} placeholder={placeholder} id={label} required pattern={pattern}
          className="input input-bordered border-alta-primary bg-white text-alta-primary caret-alta-primary w-full" 
          onChange={change}
          />
    </div>
  )
}

export default Input