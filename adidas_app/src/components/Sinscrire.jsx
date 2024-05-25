import { HiArrowNarrowRight } from "react-icons/hi"

const Sinscrire = () => {
    return (
        <div className="bg-[#EDE734] md:-mt-9 py-8 px-[1rem] ">
            <div className="grid gap-3 md:flex md:max-w-[900px] m-auto">
                <div className=" font-adihausBD uppercase text-[2rem] leading-8 md:flex-1">
                    deviens membre et profite de -20%
                </div>

                <div className="md:flex-1 md:grid md:place-items-center">
                    <div className="flex items-center gap-4 text-slate-50 bg-black w-fit px-[22px] py-[14px] uppercase font-bold relative link-footer cursor-pointer">
                        <p>S'inscrire gratuitement</p> <HiArrowNarrowRight className="w-[30px] h-[25px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sinscrire;
