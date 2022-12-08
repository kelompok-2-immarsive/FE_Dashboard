import React from 'react'

const Select = ({label, option, change, value}) => {
  return (
    <div className='flex items-center mt-2'>
        <label className='label-text text-xl w-[30%] text-black-default'>{label}</label>
        <div className='w-full'>
        <select className="select border-alta-primary w-full bg-white text-alta-primary" value={value} onChange={change}>
            {
                option.map( (opt,index) => {
                    return <option checked={opt === value && true} value={opt} key={index}>{opt}</option>
                })
            }
        </select>
        </div>
    </div>
  )
}

export default Select