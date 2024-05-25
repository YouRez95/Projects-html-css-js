import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ img, name, path }) => {
    return (
        <div className='min-w-[160px] max-w-[160px] flex flex-col items-center justify-between bg-[#eceff1] mr-[12px] md:min-w-[300px] md:max-h-[350px] border hover:border-black'>
            <Link className='p-[1rem] overflow-hidden h-[100%] flex flex-col items-center justify-between'>
                <div className=''>
                    <img src={img} alt={name} className='min-w-[150px]' />
                </div>

                <h1 className='font-semibold text-center uppercase'>{name}</h1>
            </Link>
        </div>
    )
}

export default Card
