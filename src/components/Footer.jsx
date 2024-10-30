import React from 'react'
import { FOOTER_LINKS } from '../data'

const Footer = () => {
    return (
        <>
            <div className='bg-[#065E14] px-20 py-10'>
                <div className="px-7" >
                    <div className="flex justify-between">
                        {FOOTER_LINKS.map((data) => (
                            <div key={data.title} className="footer">
                                <p className='text-[#FBBC05] py-2 font-bold'>{data.title}</p>
                                {data.menu.map((menu) => (
                                    <ul key={menu.title} className='py-2'>
                                        <li className='text-white'>
                                            <a href={menu.link}>{menu.title}</a>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        ))}
                    </div>

                    <hr className='mt-16'/>
                    <p className='text-center text-white mt-10'>&copy; 2024 LandZ. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer