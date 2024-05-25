import ItemName from "./SliderItems/ItemName"
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import Cards from "./SliderItems/Cards";


const SliderContent = ({ dataSlider }) => {
    const [array, setArray] = useState('Femmes')
    const [arrow, setArrow] = useState(1)
    const myLeft = () => {
        let left
        if (arrow === 1) {
            return left = "translate-x-[2px]"
        } else if (arrow === 2) {
            return left = "translate-x-[110px] lg:translate-x-[180px]"
        } else if (arrow === 3) {
            return left = "translate-x-[220px] lg:translate-x-[360px]"
        }
        return left
    }




    return (
        <div className="mt-[2.5rem] pl-[0px] grid gap-[2rem] overflow-hidden relative max-w-[1700px] m-auto">

            <div className="flex items-center">
                <HiOutlineArrowNarrowRight className={`w-[30px] h-[25px] mr-[2px] transition-all duration-300 ease-in-out lg:w-[50px] lg:h-[45px] ${myLeft()}`} />
                {
                    dataSlider.map((dataItem, index) => (
                        <ItemName {...dataItem} key={index} setArrow={setArrow} setArray={setArray} />
                    ))
                }
                {/* <div className="hidden md:flex absolute gap-4 right-[50px]">
                    <div className=" p-[13px] group hover:bg-black cursor-pointer">
                        <IoIosArrowBack className=" stroke-[15px] group-hover:fill-white w-[20px] h-[20px]" />
                    </div>

                    <div className=" p-[13px] group hover:bg-black cursor-pointer">
                        <IoIosArrowForward className="group-hover:fill-white stroke-[15px] w-[20px] h-[20px]" />
                    </div>
                </div> */}
            </div>


            <div className={`overflow-hidden md:overflow-visible`}>
                {
                    dataSlider.filter(item => item.title === array).map((item, index) => (
                        <Cards {...item} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default SliderContent
