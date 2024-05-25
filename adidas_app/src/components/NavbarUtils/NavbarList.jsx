import { MdKeyboardArrowRight } from 'react-icons/md';

const NavbarList = ({ data: { title, categories }, index, choseNav }) => {

    return (
        <>
            <div className={`pt-5 pl-9 pr-7 flex justify-between
            ${index === 3 || index === 4 || index === 5 ? "font-thin" : "font-bold"} `}>
                <p className='text-[1.16rem]' onClick={e => choseNav(e.target.innerText)}>{title}</p>
                <MdKeyboardArrowRight />
            </div>
        </>
    )
}

export default NavbarList
