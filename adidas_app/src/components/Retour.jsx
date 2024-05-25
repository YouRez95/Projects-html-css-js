import { useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineClose } from "react-icons/md"
import { LinkUnderline } from '../components/NavbarUtils/index'


const Retour = () => {
    const [gratuit, setGratuit] = useState(false)
    return (
        <div>
            <div className='bg-black h-[45px]'>
                <button className=' w-full h-full relative' type='button' onClick={() => setGratuit(true)}>
                    <div className='relative grid place-items-center max-w-[350px] m-auto'>
                        <p className='text-white uppercase text-[.7rem] font-semibold absolute animation__opacity'>livraison gratuite pour les commandes de plus de 25 €</p>
                        <p className='text-white uppercase text-[.7rem] font-semibold absolute animation__opacity-two'>Retours et echange gratuits</p>
                        <MdOutlineKeyboardArrowDown className=' fill-white absolute -right-[1.5rem] text-2xl hidden md:flex mt-[-2px]' />
                    </div>

                    <MdOutlineKeyboardArrowDown className=' fill-white absolute right-[1rem] top-[50%] transform translate-y-[-50%] text-2xl flex md:hidden ' />

                </button>
            </div>

            <div className={`fixed top-0 bottom-0 md:bottom-[auto] left-0 right-0 bg-white duration-[.5s] transition-[height] z-[1000] ease-in-out ${gratuit ? "h-screen md:h-[50vh]" : "h-0"}`}>
                <div className={`p-5 transition-all  ${gratuit ? "opacity-1 visible duration-[2s]" : "opacity-0 invisible duration-[.2s]"}`}>
                    <div className='absolute right-8 top-8 border border-black cursor-pointer' onClick={() => setGratuit(false)}>
                        <MdOutlineClose className=' m-1 text-4xl' />
                    </div>

                    <div className='flex flex-col md:flex-row max-w-[1000px] m-auto justify-between'>
                        <div className=' grid gap-3 max-w-[400px]'>
                            <h1 className=' font-semibold  mt-[6rem] uppercase font-adihausBD'>Livraison gratuite pour les commandes de plus de 25 €</h1>
                            <p className='text-sm opacity-[.8]'>Dépense plus de 25 € et profite de la livraison GRATUITE ! <br /> Pour plus d'infos, la section aide de notre site contient toutes les FAQ concernant la livraison.</p>
                            <LinkUnderline className="link__black" link="/aide">en savoir plus</LinkUnderline>
                        </div>

                        <div className=' grid gap-3 max-w-[400px]'>
                            <h1 className=' font-semibold  mt-[6rem] uppercase font-adihausBD'>RETOURS ET ÉCHANGES GRATUITS</h1>
                            <p className='text-sm opacity-[.8]'>Échange ou retourne tes articles gratuitement pendant 60 jours Les produits personnalisés ne peuvent pas être retournés. Certains produits en édition limitée comme la YEEZY peuvent être retournés pendant 14 jours</p>
                            <LinkUnderline className="link__black">En savoir plus sur les retours</LinkUnderline>
                            <LinkUnderline className="link__black">En savoir plus sur les échanges</LinkUnderline>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Retour
