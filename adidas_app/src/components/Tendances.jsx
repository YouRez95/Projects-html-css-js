import React from 'react'
import LinkTendance from './LinkTendance'

const Tendances = () => {
    return (
        <div className='max-w-[1550px] m-auto my-9'>
            <div className='mx-[1rem]'>
                <h1 className='text-[1.6rem] font-semibold mb-[40px] md:text-[1.8rem] lg:text-[2rem]'>Tendances femmes</h1>

                <div className='block md:grid md:grid-cols-3 gap-9'>
                    <LinkTendance>stan smith</LinkTendance>
                    <LinkTendance>samba</LinkTendance>
                    <LinkTendance>basket</LinkTendance>
                    <LinkTendance>doudoune</LinkTendance>
                    <LinkTendance>jogging</LinkTendance>
                </div>
            </div>
        </div>
    )
}

export default Tendances
