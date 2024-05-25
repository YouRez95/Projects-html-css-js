import { Link } from 'react-router-dom'


const Produit = ({ id, img, title, info, link, path, video, myRef }) => {



    return (
        <Link to={path} className="min-w-[70vw] ss:min-w-[35vw] md:min-w-[23vw] md:max-w-[23vw] lg:max-w-[400px]" ref={myRef}>
            <div className='h-full flex flex-col'>
                <div className='flex-1'>
                    {
                        img ? <img src={img} alt={title} className='w-full h-full' /> : <video src={video} muted autoPlay loop className='w-[100%]'></video>
                    }
                </div>

                <div className='flex flex-col gap-2 mt-3 flex-1 justify-start'>
                    <h1 className='font-semibold leading-4'>{title}</h1>
                    <p className='font-thin text-slate-800 text-[.8rem]'>{info}</p>
                    <div className="mt-[10px] uppercase font-adihausBD text-[.9rem] flex flex-1 items-end">
                        <h2 className='link__black'>{link}</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Produit
