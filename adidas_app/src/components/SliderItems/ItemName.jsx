import { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const ItemName = ({ title, id, setArrow, setArray }) => {

    const setVariable = (id, title) => {
        setArrow(id)
        setArray(title)
    }

    return (

        <div className='text-[1.1rem] font-semibold font-adihausBD mr-[40px] cursor-pointer lg:text-[2rem] lg:mr-[50px]' onClick={() => setVariable(id, title)}>
            {title}
        </div>
    )
}

export default ItemName
