import { useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const Categories = ({ title, categories, menuTwo, choseNavTwo }) => {

    return (
        <div className=''>
            <button className='flex h-[60px] items-center gap-3 border-b-[1.5px] w-full'
                onClick={menuTwo}>
                <div className=''>
                    <MdKeyboardArrowLeft className='h-[30px] w-[30px]' />
                </div>
                <div className='text-xl font-semibold'>
                    {title}
                </div>
            </button>

            <ul className='grid gap-5 pl-9 mt-9'>
                {
                    categories.map(cat => (
                        <li key={Math.random()} className=' text-[1.2rem] capitalize flex justify-between pr-5'>
                            <div onClick={e => console.log("here")}>
                                {cat.subtitle}
                            </div>
                            <MdKeyboardArrowRight className=' opacity-[0.6]' />
                        </li>
                    ))
                }
            </ul>
        </div >
    )
}

export default Categories