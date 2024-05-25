import { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import CardsTwo from './SliderTwo/CardsTwo';
import CardTwoDesktop from './SliderTwo/CardTwoDesktop';
const SliderMeilleur = ({ data }) => {
    const [indexTitle, setIndexTitle] = useState(0)
    const [myArray, setMyArray] = useState("Le meilleur d'adidas")

    const indexAndTitle = (index, arr) => {
        setIndexTitle(index)
        setMyArray(arr)
    }

    console.log(indexTitle)

    const myleft = () => {
        if (indexTitle === 0) {
            return "translate-x-[0px]"
        } else if (indexTitle === 1) {
            return "translate-x-[220px] lg:translate-x-[320px]"
        } else if (indexTitle === 2) {
            return "translate-x-[435px] lg:translate-x-[650px]"
        }
    }

    return (
        <div className='my-[3rem] relative max-w-[1700px] m-auto'>
            <div className='flex overflow-auto scrollbar__width items-center mb-[2rem] lg:mb-[3rem]'>
                <HiOutlineArrowNarrowRight className={`min-w-[30px] h-[27px] transition-all duration-300 ease-out transform lg:w-[40px] lg:h-[35px] ${myleft()}`} />
                {
                    data.map((item, index) => (
                        <div key={index} onClick={(e) => indexAndTitle(index, e.target.innerText)} className="font-adihausBD mr-[2rem] ml-[.5rem] text-[1.1rem] cursor-pointer min-w-fit tracking-wide lg:text-[1.7rem] lg:mr-[50px]">{item.title}</div>
                    ))
                }
            </div>

            <div className='overflow-auto scrollbar__width gap-5 px-[1rem] hidden md:flex'>
                {
                    data.filter((item) => item.title === myArray).map(
                        (item, index) => (
                            <CardsTwo key={index} categories={item} />
                        )
                    )
                }
            </div>

            <div className='flex overflow-auto scrollbar__width gap-5 px-[1rem] md:hidden'>
                {
                    data.filter((item) => item.title === myArray).map(
                        (item, index) => (
                            <CardTwoDesktop key={index} categories={item} />
                        )
                    )
                }
            </div>
        </div>
    )
}

export default SliderMeilleur
