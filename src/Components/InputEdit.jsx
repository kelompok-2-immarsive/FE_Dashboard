import React from 'react'

const InputEdit = ({label ,type,placeholder, pattern = null, change }) => {
    return (
      <div className='flex items-center mt-2'>
          <label className='label-text text-xl w-[30%] text-black-default'>{label}</label>
          <input
            type={type} placeholder={placeholder} id={label} pattern={pattern}
            className="input input-bordered border-alta-primary bg-white text-alta-primary caret-alta-primary w-full  placeholder:text-alta-primary  placeholder:font-semibold" 
            onChange={change}
            />
      </div>
    )
  }
  

export default InputEdit