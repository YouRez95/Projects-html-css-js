import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTiktok, FaYoutube } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import Social from './Social'

const FooterLiens = ({ data, dataTwo, dataThree }) => {
    return (
        <div>
            <div className='bg-black text-[#c8cbcc] text-[.8rem] block py-5 md:hidden'>
                <div className='grid grid-cols-2 text-center gap-y-4'>
                    {
                        data.map((item, index) => (
                            <div key={index}>
                                <Link to={item.path} className="hover:text-slate-200 opacity-[.8]">
                                    {item.name}
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className=' hidden md:grid grid-cols-6 px-9 py-9 gap-4 max-w-[1200px] m-auto '>

                {
                    dataThree.map((items, index) => (
                        <div key={index}>
                            <div className='grid gap-4'>
                                <h1 className='font-adihausBD text-[1rem] uppercase'>{items.title}</h1>
                                <div className='flex flex-col'>
                                    {
                                        items.links.map((item, index) => (
                                            <Fragment key={index}>
                                                <div className='text-[.85rem]'>
                                                    <Link className='hover:underline capitalize'>{item.name}</Link>
                                                </div>


                                                <div className='mt-[7px]'>
                                                    <h1 className='font-adihausBD text-[1rem] uppercase'>{item.title}</h1>
                                                    <div className='text-[.85rem]'>
                                                        <Link className='hover:underline'>{item.titlename}</Link>
                                                    </div>
                                                </div>
                                            </Fragment>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }

                <div>
                    <div className='grid gap-4'>
                        <h1 className='font-adihausBD text-[1rem] uppercase'>Suivez-nous</h1>
                        <div className='flex flex-col gap-3'>

                            <Social path="/aide">
                                <FaFacebookF className='fill-white' />
                            </Social>
                            <Social path="/aide">
                                <FaInstagram className='fill-white ' />
                            </Social>
                            <Social path="/aide">
                                <BsTwitter className='fill-white' />
                            </Social>
                            <Social path="/aide">
                                <FaPinterestP className='fill-white' />
                            </Social>
                            <Social path="/aide">
                                <FaTiktok className='fill-white' />
                            </Social>
                            <Social path="/aide">
                                <FaYoutube className='fill-white' />
                            </Social>
                        </div>
                    </div>

                </div>

            </div>


            <div className='bg-[#363738] text-[#c8cbcc] text-[.8rem] py-5 border-t-[.3px]'>
                <div className='grid grid-cols-2  gap-y-4 text-center'>
                    {
                        dataTwo.map((item, index) => (
                            <div key={index}>
                                <Link to={item.path} className="hover:text-slate-200 opacity-[.8] ">
                                    {item.name}
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default FooterLiens
