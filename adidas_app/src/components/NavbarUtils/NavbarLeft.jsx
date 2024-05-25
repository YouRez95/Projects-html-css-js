import { useEffect, useState } from 'react';
import { CgAdidas } from 'react-icons/cg';
import { NavbarList, NavbarListTwo, Categories, CloseNavbar } from './index';

const NavbarLeft = ({ myDataOne, myDataTwo, handlerNav, openNav }) => {

    const [navTwo, setNavTwo] = useState(false)
    const [array, setArray] = useState([])
    const choseNav = (chose) => {
        const filteredArray = myDataOne.filter(item => item.title === chose)
        setArray(filteredArray)
        menuTwo()
    }
    const menuTwo = () => {
        setNavTwo(prev => !prev)
    }

    return (
        <>
            <div className={`bg-white fixed top-0 w-full h-full transition-all z-[50000] duration-[.5s] ease-out ${openNav ? "left-0" : "left-[-100%]"} `}>
                <div className='flex items-center justify-center relative border-b-[.8px] p-[.3rem]'>
                    <div className=''>
                        <CgAdidas className='w-[50px] h-[50px]' />
                    </div>
                    <CloseNavbar handlerNav={handlerNav} />
                </div>
                <div className='flex flex-col border-b-[.7px] pb-[20px]'>
                    {
                        myDataOne.map((data, index) => (
                            <NavbarList data={data} key={index} index={index} choseNav={choseNav} />
                        ))
                    }
                </div>

                <div className='flex flex-col'>
                    {
                        myDataTwo.map((data, index) => (
                            <NavbarListTwo {...data} key={index} />
                        ))
                    }
                </div>

            </div>

            <div className={`bg-white fixed top-0 transition-all z-[50000]  duration-[.5s] w-full h-screen ${array.length === 0 || navTwo ? "right-[-100%]" : "right-0"}`} >
                {
                    array.map((categorie, index) => (
                        <Categories {...categorie} key={index} menuTwo={menuTwo} />
                    ))
                }
            </div>
        </>

    )
}

export default NavbarLeft
