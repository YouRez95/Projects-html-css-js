import { useRef, useState } from 'react'
import { GrSearch } from 'react-icons/gr'
import { FiUser, FiHeart } from 'react-icons/fi'
import { AiOutlineShopping, AiOutlineClose } from 'react-icons/ai'

const Search = () => {
    const input = useRef("")
    const [myText, setMyText] = useState('')
    console.log(myText.length)
    return (
        <>
            <div className=' bg-[#eceff1] flex items-center border hover:border-emerald-600 transition-all ease-out flex-1 justify-end max-w-[350px]'>
                <input type="text" id='search' placeholder={myText.length === 0 ? "Rechercher" : myText} className='bg-transparent w-[90%] text-black placeholder:text-slate-900 focus:placeholder:  placeholder:text-sm outline-none border-none' value={myText} onChange={(e) => setMyText(e.target.value)} />
                <label htmlFor="search">
                    {
                        myText.length === 0 ? <GrSearch /> : <AiOutlineClose onClick={() => setMyText("")} />
                    }

                </label>
            </div>
            <div className='flex gap-6 justify-end'>
                <div className=''>
                    <FiUser className='w-[20px] h-[20px] stroke-[2px]' />
                </div>

                <div>
                    <FiHeart className='w-[20px] h-[20px] stroke-[2px]' />
                </div>

                <div>
                    <AiOutlineShopping className='w-[20px] h-[20px] stroke-[3px]' />
                </div>
            </div>
        </>
    )
}

export default Search
