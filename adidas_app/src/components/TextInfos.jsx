import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowUp } from 'react-icons/io'

const TextInfos = ({ data }) => {

    const scrollTop = () => {
        window.scroll(0, 0)
    }
    return (
        <>
            <div className='bg-[#f5f5e5]'>
                <div className='my-9 bg-[#f5f5e5] py-9 px-[1.8rem] grid gap-9 md:grid-cols-2 max-w-[1300px] m-auto'>
                    {
                        data.map((item, index) => (
                            <article key={index} className='grid gap-5 md:grid-rows-[200px_1fr_minmax(100px,200px)]'>
                                <h1 className='font-adihausBD text-[2.3rem] leading-9 max-w-[400px]'>{item.title}</h1>
                                <p className='leading-[22px] text-[16px] mb-4'>{item.infos1}</p>
                                <p className='leading-[22px] text-[16px] mb-4'>{item.infos2}</p>
                            </article>
                        ))
                    }
                </div>
            </div>
            <div className='bg-[#ebebeb] mt-[-2.5rem] py-[1rem] px-[1.5rem] md:hidden'>
                <div className='uppercase font-semibold mb-3'>
                    votre opinion compte
                </div>
                <div className=''>
                    <p className='leading-[22px] text-[16px] mb-4'>Nous essayons toujours de nous améliorer et vous pouvez nous aider avec vos commentaires.</p>
                    <Link to="/" className='underline hover:bg-black hover:text-slate-50'>Merci pour ta participation à cette courte enquête</Link>
                </div>
            </div>
            <div className='bg-white flex items-center justify-center gap-2 py-5 cursor-pointer md:hidden' onClick={scrollTop}>
                <IoIosArrowUp /> <p className='text-[.9rem]'>HAUT DE LA PAGE</p>
            </div>
            <div className='bg-black text-slate-50 flex justify-center items-center md:hidden'>
                <div className='flex-1 text-center uppercase font-bold text-[.87rem]'>
                    <Link className='block py-4'>Se connecter</Link>
                </div>
                <div className='flex-1 text-center uppercase font-bold text-[.87rem]'>
                    <Link className='block py-4'>Ton panier (0)</Link>
                </div>
            </div>
        </>
    )
}

export default TextInfos
