import { useRef } from 'react'
import Produit from './Produit'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useState } from 'react';

const CardProduits = ({ data }) => {

    const [myData, setMyData] = useState(data)
    const refButton1 = useRef()
    const refButton2 = useRef()


    const nextSlide = () => {
        const length = myData.length
        setMyData(myData.slice(1, 5))
        if (!refButton1.current.classList.contains('buttonHidden')) {
            refButton1.current.classList.add('buttonHidden')
        }
        if (refButton2.current.classList.contains('buttonHidden')) {
            refButton2.current.classList.remove('buttonHidden')
        }

    }

    const prevSlide = () => {
        setMyData(data)
        if (refButton1.current.classList.contains('buttonHidden')) {
            refButton1.current.classList.remove('buttonHidden')
        }
        if (!refButton2.current.classList.contains('buttonHidden')) {
            refButton2.current.classList.add('buttonHidden')
        }

    }


    return (
        <div className='flex gap-3 overflow-auto scrollbar__width relative my-[5rem] m-auto'>
            <div className="flex gap-3 w-full transition-all ml-[1rem]">
                {
                    myData.map((item) => (
                        <Produit key={item.id} {...item} />
                    ))
                }
            </div>

            <div className='group cursor-pointer absolute w-[4rem] h-[3rem] bg-white border border-black place-items-center left-0 top-[30%] hidden buttonHidden transition-all ease-out md:grid' onClick={prevSlide} ref={refButton2}>
                <HiOutlineArrowNarrowRight className='w-[30px] h-[25px] transform rotate-[180deg] group-hover:text-gray-500' />
            </div>

            <div className='group cursor-pointer absolute w-[4rem] h-[3rem] bg-white border border-black hidden place-items-center right-0 top-[30%] transition-all ease-out md:grid' onClick={nextSlide} ref={refButton1}>
                <HiOutlineArrowNarrowRight className='w-[30px] h-[25px] group-hover:text-gray-500' />
            </div>
        </div>
    )
}

export default CardProduits
