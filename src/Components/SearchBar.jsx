import React from 'react'
import { useState } from 'react';
import { GoSearch } from 'react-icons/go';

const SearchBar = ({title, description, onSearch, button}) => {
    const [keyword, setKeyword] = useState('')
    const keyPress = (e) => {
        if(e.key === 'Enter'){
            onSearch(keyword)
            console.log(keyword)
        }
    }

    return (
        <div className='text-alta-primary w-full'>
            <div className='flex justify-between w-full p-2'>
                <h1 className='text-[40px]'>{title}</h1>
                <div className='flex'>
                    <div className="relative mr-3">
                        <div className="absolute top-4 left-4 items-center">
                            <GoSearch />
                        </div>
                        <input
                            type="text"
                            className="block p-2 pl-10 input input-bordered border-alta-primary caret-alta-primary w-full bg-white"
                            placeholder="Search Here..." onKeyPress={(e) => keyPress(e)}
                            onInput={(e) => setKeyword(e.target.value)}
                        />
                    </div>
                    {button}
                </div>
            </div>
            <p className='text-xl p-2'>{description}</p>
        </div>
    )
}

export default SearchBar