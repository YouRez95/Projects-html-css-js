import { BiHeart } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Carousel from 'react-elastic-carousel';
import { useRef } from 'react';
import { useEffect } from 'react';
const CardsTwo = ({ categories: { infos } }) => {

    const carousselRef = useRef(null)

    const onNextStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            carousselRef.current.goTo(0)
        }
    };

    const onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            carousselRef.current.goTo(infos.length)
        }
    }

    const breakPoints = [
        // { width: 960, itemsToShow: 2 },
        { width: 990, itemsToShow: 3, itemsToScroll: 2, pagination: false },
        { width: 1090, itemsToShow: 3.5, itemsToScroll: 2, pagination: false },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2, pagination: false },
        { width: 1450, itemsToShow: 5, itemsToScroll: 4, pagination: false },
        { width: 1750, itemsToShow: 6, itemsToScroll: 5, pagination: false },
    ]

    return (
        <Carousel breakPoints={breakPoints}
            ref={carousselRef}
            onNextStart={onNextStart}
            onPrevStart={onPrevStart}
            disableArrowsOnEnd={false}
        >
            {
                infos.map((info, index) => (
                    <Link key={index} to={info.link} className="max-w-[180px] min-w-[180px] sm:max-w-[240px] sm:min-w-[240px] md:max-w-[280px] md:min-w-[280px] border border-white hover:border-black group">
                        <div className='relative'>
                            <div>
                                <img src={info.img} alt={info.name} className='w-full h-full ' />
                            </div>

                            {
                                info.prix ? <BiHeart className='absolute top-[1rem] right-[1rem]' /> : <></>
                            }
                            {
                                info.prix ? <div className='absolute bottom-0 left-[7px] text-[.8rem] px-[5px] bg-white group-hover:bottom-3 transition-all'>{info.prix}</div> : <></>
                            }
                        </div>

                        <div className='flex flex-col gap-[.5px] mt-2 px-1 py-4'>
                            <h3 className='text-[.9rem]'>{info.name}</h3>
                            {info.subname ? <p className='text-[.9rem] text-gray-500'>{info.subname}</p> : <></>}
                            {info.subsubname ? <p className='text-[.9rem]'>{info.subsubname}</p> : <></>}
                        </div>
                    </Link>
                ))
            }
        </Carousel>
    )
}

export default CardsTwo