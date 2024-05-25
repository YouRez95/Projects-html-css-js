import React from 'react'
import { Link } from 'react-router-dom'

const LinkTendance = (props) => {
    return (
        <Link to="/aide" className='border-b-[1px] border-x-0 border-t-0 border-slate-900 mb-[20px] hover:border-b-[8px] hover:mb-[13px] cursor-pointer block'>
            {/* // <Link to="/aide" className=' border-[8px] border-black block'> */}

            <div className='font-adihausBD text-[2rem] md:text-[2.3rem] lg:text-[2.5rem]'>
                {props.children}
            </div>
        </Link>
    )
}

export default LinkTendance
