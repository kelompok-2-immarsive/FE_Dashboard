import React from 'react'
import { useState } from 'react';
import { GoSearch } from 'react-icons/go';

const SearchBar = () => {
    const [keyword, setKeyword] = useState('')
    return (
        <div className='text-alta-primary w-full'>
            <div className='flex justify-between w-full p-2'>
                <h1 className='text-[40px]'>Title</h1>
                <div className='flex'>
                    <div className="relative mr-3">
                        <div className="absolute top-4 left-4 items-center">
                            <GoSearch />
                        </div>
                        <input
                            type="text"
                            className="block p-2 pl-10 input input-bordered border-alta-primary caret-alta-primary w-full bg-white"
                            placeholder="Search Here..."
                            onInput={(e) => setKeyword(e.target.value)}
                        />
                    </div>
                    <button className="btn bg-alta-primary hover:bg-hover-primary text-white">Add New</button>
                </div>
            </div>    
            <p className='text-xl p-2'>Description</p>
        </div>
    )
}

export default SearchBar