import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Messi = ({ title, text, link, path }) => {
    return (
        <div className="relative min-h-[600px] lg:top-[-7px] z-[1] md:min-h-[450px] lg:min-h-[80vh] ">
            <div className="absolute z-[-1] bottom-0 top-0 bg-cover bg-no-repeat  w-full h-full back__messi-mobile bg-center-bottom flex ss:hidden">
            </div>
            <div className="absolute z-[-1] bottom-0 top-0 bg-cover bg-no-repeat  w-full h-full back__messi-tablet bg-center-bottom hidden ss:flex">
            </div>
            <div className="absolute z-[-1] bottom-0 top-0 w-full h-full bg-cover back__messi-desktop bg-right-top hidden md:flex">
            </div>
            <div className="absolute bottom-[1vh] text-white flex flex-col gap-[1rem] p-[20px] md:top-[50%] md:transform md:translate-y-[-50%] md:bottom-auto lg:left-[5vw]">
                <h1 className="text-5xl max-w-[260px]">{title}</h1>
                <p className=" max-w-[350px] leading-[27px] ss:tracking-wide lg:max-w-[450px]">{text}</p>
                <Link to={path} className="link__box">
                    <span>{link}</span>
                    <HiOutlineArrowNarrowRight className='w-[25px] h-[25px]' />
                </Link>
            </div>
        </div>
    )
}

export default Messi;

