import { useState } from 'react'
import { FiMenu, FiUser } from 'react-icons/fi';
import { CgAdidas } from 'react-icons/cg';
import { AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai';
import { NavbarLeft, NavbarDesktop } from './NavbarUtils/index';

const Navbar = ({ myDataOne, myDataTwo, myDataThree, dataDesktop }) => {
    const [openNav, setOpenNav] = useState(false)
    const [position, setPosition] = useState("top-0")
    const handlerNav = () => {
        setOpenNav(prevState => !prevState)
    }

    const handleScroll = () => {
        console.log('window.scrollY', window.scrollY);
        if (window.scrollY > 200) {
            setPosition('top-[-100%]')
        }
        else {
            setPosition('top-0')
        }
    };

    window.addEventListener('scroll', handleScroll)

    return (
        <nav className={`bg-white h-auto md:h-[11.5vh] sticky z-10 ${position} transition-all duration-1000`}>
            <div className='float-right p-2 hidden md:block lg:mr-[4rem] '>
                <ul className='flex gap-3 text-[.85rem]'>
                    {
                        myDataThree.map(item => (
                            <li className='cursor-pointer' key={Math.random()}>{item.title}</li>
                        ))
                    }
                </ul>
            </div>

            <div className='items-end hidden md:flex w-full relative gap-4 justify-between lg:pl-[3rem] lg:pr-[4rem]'>
                <NavbarDesktop dataDesktop={dataDesktop} />
            </div>
            <div className=' flex items-center justify-between md:hidden'>

                <div className='flex-[0.7]'>
                    <FiMenu className='w-[40px] h-[30px] cursor-pointer' onClick={handlerNav} />
                </div>

                <div className=''>
                    <CgAdidas className='w-[50px] h-[50px]' />
                </div>

                <div className='flex gap-4 flex-[0.7] justify-end'>

                    <div>
                        <FiUser className='w-[30px] h-[25px]' />
                    </div>

                    <div>
                        <AiOutlineSearch className='w-[30px] h-[25px]' />
                    </div>

                    <div>
                        <AiOutlineShopping className='w-[30px] h-[25px]' />
                    </div>
                </div>
            </div>
            <NavbarLeft myDataOne={myDataOne} myDataTwo={myDataTwo} handlerNav={handlerNav} openNav={openNav} />
        </nav>
    )
}

export default Navbar
