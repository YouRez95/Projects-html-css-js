import React from 'react'
import { LinkUnderline } from '../NavbarUtils'
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const CardOne = ({ name, link }) => {
    return (
        <div className='min-w-[160px] max-w-[160px] flex flex-col items-start justify-end bg-white p-[1rem] mr-[12px] md:min-w-[300px] md:min-h-[340px] md:max-h-[350px]'>
            <div className='grid gap-3 md:flex md:flex-col md:justify-between md:h-full'>
                <h1 className='font-adihausBD text-[1.2rem] md:text-[2rem]'>{name}</h1>
                <div className='grid md:hidden'>
                    <LinkUnderline to="/">{link}</LinkUnderline>
                </div>

                <Link className='hidden md:flex uppercase font-semibold text-[.9rem] tracking-wide
                justify-between items-center min-w-[280px] p-3 border-[1px] border-black group '>
                    <span className=' group-hover:text-gray-500 group-hover:transition-all'>{link}</span>
                    <HiOutlineArrowNarrowRight className='w-[25px] h-[25px] group-hover:text-gray-500 group-hover:transition-all' />
                </Link>
            </div>
        </div>
    )
}

export default CardOne