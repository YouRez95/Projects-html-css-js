import LinkWhite from './LinkWhite';

const Arriver = ({ title, text, links }) => {
    return (
        <div className="relative min-h-[600px] lg:top-[-7px] z-[1] md:min-h-[450px] lg:min-h-[80vh] ">
            <div className="absolute z-[-1] bottom-0 top-[0px] bg-cover bg-no-repeat  w-full h-full back__image-mobile bg-center-bottom flex ss:hidden">
            </div>
            <div className="absolute z-[-1] bottom-0 top-0 bg-cover bg-no-repeat  w-full h-full back__image-tablet bg-center-bottom hidden ss:flex">
            </div>
            <div className="absolute z-[-1] bottom-0 top-[0px] lg:top-[-3px] w-full h-full bg-cover back__image-desktop bg-right-top hidden md:flex">
            </div>
            <div className="absolute bottom-[1vh] text-white flex flex-col gap-[1rem] p-[20px] md:top-[50%] md:transform md:translate-y-[-50%] md:bottom-auto lg:left-[5vw]">
                <h1 className="text-4xl font-adineu font-semibold ss:max-w-[300px] lg:max-w-[500px]">{title}</h1>
                <p className=" max-w-[350px] leading-[27px] ss:tracking-wide lg:max-w-[450px]">{text}</p>
                <ul className="flex flex-col gap-4">
                    {
                        links.map((link, index) => (
                            <LinkWhite key={index} className="linktwo" link="/aide">{link}</LinkWhite>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Arriver;
