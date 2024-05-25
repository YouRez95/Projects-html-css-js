import { Fragment, useState, useRef, useEffect } from 'react';
import { CgAdidas } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { Search } from './index';

const NavbarDesktop = ({ dataDesktop }) => {
    const [showItems, setShowItems] = useState(false)
    const [bold, setBold] = useState(["Accès en avant-première au Black Friday", "Marques", "Cadeaux", "Chausseres filles", "Vêtemenets filles", "Acheter par taille de vêtement"])

    const myHnadlerHover = () => {

    }


    return (
        <>
            <div className='flex-[.4]'>
                <CgAdidas className='w-[80px] h-[60px] lg:w-[100px] lg:h-[70px]' />
            </div>
            <div className='flex-3' onMouseLeave={e => setShowItems(false)}>
                <div className='' >
                    <div className='flex items-end gap-5 mb-[10px]'>
                        {
                            dataDesktop.map((item, index) => (
                                <div
                                    className={`text-[.85rem] cursor-pointer hover:relative lg:mb-[10px] lg:text-[1rem] ${index === 3 || index === 4 || index === 5 ? "font-normal" : "font-semibold"} ${!showItems ? "" : "underline__navbar"}`}
                                    key={index}
                                    onMouseEnter={e => setShowItems(e.target.innerText)}
                                >{item.title}</div>

                            ))
                        }
                    </div>
                    <div className='absolute bg-white left-0 right-0 top-[60px] border-t-[1px] z-[100]' onMouseLeave={e => setShowItems(false)}>
                        {/* <div className='absolute bg-red-500 left-0 right-0 top-[0px] z-[-1]' onMouseLeave={e => setShowItems(false)}> */}
                        {
                            dataDesktop.filter(name => name.title === showItems).map((item, index) => (
                                <Fragment key={index}>
                                    <div className="flex max-w-[1500px] m-auto">
                                        {
                                            item.list.map((item, index) => (
                                                <div key={index} className="flex-1 p-[15px] mb-[-9px] text-left font-semibold text-[.75rem] uppercase leading-3 tracking-[1.3px]">{item.subtitle}</div>
                                            ))
                                        }
                                    </div>


                                    <div className='flex max-w-[1500px] m-auto'>
                                        {
                                            item.list.map((item, index) => (
                                                <div key={index} className='flex-1 grid gap-2 p-[15px]'>
                                                    <div className='text-[.8rem] h-fit'>
                                                        {item.items.map((items, index) => (

                                                            <Fragment key={index}>
                                                                <div className={`mb-1 ${bold.includes(items.item) ? "font-semibold mt-4 uppercase" : "font-normal"}`}>
                                                                    <Link to={items.link} className="hover:underline">{items.item}</Link>
                                                                </div>
                                                                {
                                                                    items.img ? <Link to={items.link}><img src={items.img} alt='image-navbar' className='w-[200px] h-auto' /></Link> : <></>

                                                                }
                                                            </Fragment>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>

                                    {
                                        item.listFooter ?
                                            <div className='flex gap-9 border p-3'>
                                                {
                                                    item.listFooter.map((item, index) => (
                                                        <div key={index} className='font-semibold text-[.8rem]'>
                                                            <Link to={item.link} className="hover:underline">{item.item}</Link>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            :
                                            <></>
                                    }
                                </Fragment>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='flex-1 flex mb-[8px] gap-[40px] justify-end lg:mb-[20px]'>
                <Search />
            </div>
        </>
    )
}

export default NavbarDesktop
