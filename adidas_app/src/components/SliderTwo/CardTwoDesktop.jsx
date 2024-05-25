import { BiHeart } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Carousel from 'react-elastic-carousel';
import { useRef } from 'react';
import { useEffect } from 'react';
const CardTwoDesktop = ({ categories: { infos } }) => {


    return (
        <>
            {
                infos.map((info, index) => (
                    <Link key={index} to={info.link} className="max-w-[180px] min-w-[180px] sm:max-w-[240px] sm:min-w-[240px] md:max-w-[280px] md:min-w-[280px]">
                        <div className='relative'>
                            <div>
                                <img src={info.img} alt={info.name} className='w-full h-full ' />
                            </div>

                            {
                                info.prix ? <BiHeart className='absolute top-[1rem] right-[1rem]' /> : <></>
                            }
                            {
                                info.prix ? <div className='absolute bottom-0 left-[7px] text-[.8rem] px-[5px] bg-white'>{info.prix}</div> : <></>
                            }
                        </div>

                        <div className='flex flex-col gap-[.5px] mt-2'>
                            <h3 className='text-[.9rem]'>{info.name}</h3>
                            {info.subname ? <p className='text-[.9rem] text-gray-500'>{info.subname}</p> : <></>}
                            {info.subsubname ? <p className='text-[.9rem]'>{info.subsubname}</p> : <></>}
                        </div>
                    </Link>
                ))
            }
        </>
    )
}

export default CardTwoDesktop
