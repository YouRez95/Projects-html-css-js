import { GrClose } from 'react-icons/gr';
const CloseNavbar = ({ handlerNav }) => (

    <div className='absolute right-6 top-[50%] transform -translate-y-[50%] p-2 cursor-pointer'>
        <GrClose className='w-[20px] h-[20px] stroke-[5px]' onClick={handlerNav} />
    </div>
)


export default CloseNavbar
