import React, { useState } from 'react'
// import '../../assets/css/App.css'
import farmland from '../images/farmland.jpg'
import { EnvironmentOutlined, StarOutlined, HeartOutlined, ShareAltOutlined, HeartFilled, RiseOutlined } from '@ant-design/icons'
// import { button } from 'antd'
import { useNavigate } from 'react-router-dom'


const SearchCardTablet = () => {
    const [isFav, setIsFav] = useState(false)

    const navigate = useNavigate();
    return (
        <>

            <div className="w-full rounded-xl p-[1px] bg-gradient-to-r from-[#95C698] via-[#C2C681] to-[#E4C56F]">
                <div className="p-2 w-full h-full bg-white rounded-xl">

                    {/* top location and button box  */}
                    <div className="top-location block xl:flex justify-between h-auto items-center">
                        <div className="area text-sm">
                            <EnvironmentOutlined className='text-lg' /> Srisailam Highway, Hyderabad
                        </div>
                        <div className="area-action space-x-3">
                            <button
                                size='small'
                                onClick={(e) => isFav ? setIsFav(false) : setIsFav(true)}
                            >
                                {isFav ? <HeartFilled /> : <HeartOutlined />}
                            </button>
                            <button
                                size='small'
                            >
                                <ShareAltOutlined />
                            </button>
                            <button
                                type="primary"
                                size='small'
                                className="bg-[#065E14] text-white btn btn-mobile-contact py-1 px-5 rounded-lg"
                            >
                                Contact
                            </button>
                        </div>
                    </div>


                    {/* image and right content */}
                    <div className="image w-full block xl:flex">
                        {/* image container  */}
                        <div className="image relative w-full xl:w-1/2 h-full mt-2">
                            <img src={farmland} alt="Farmland" className='h-40 rounded-sm relative w-full' onClick={() => navigate('/land-profile')}/>

                            <div className="top-container absolute top-2 flex text-xs gap-3 h-auto items-center">
                                <div className="verified-text text-white bg-[#065E14] py-0.5 ps-2 pe-5">
                                    Verified
                                </div>
                                <div className="rating bg-amber-400 py-0.5 rounded-full px-2 text-[10px] font-bold">
                                    <StarOutlined className='font-bold' /> 4.2
                                </div>
                            </div>
                            <div className="bottom-text absolute bottom-0 text-white text-xs py-1 ps-2 w-full" style={{ backgroundColor: "#0000004a" }}>
                                30 people are viewing this property
                            </div>
                        </div>

                        <div className="content ps-4 pe-2">
                            {/* rate box  */}
                            <div className="rate pt-2">
                                <p className=''><span className='text-[#065E14] font-bold'>5.25 Cr</span> &nbsp; | &nbsp; 1377/Sqft</p>
                            </div>

                            {/* data of farmland container */}
                            <div className="farmlandData flex xl:gap-5 pt-4 font-bold flex-wrap justify-between xl:justify-start">

                                <div className=''>
                                    <div className="farmalandArea my-2.5">
                                        <p className='uppercase text-[#A0A0A0] text-sm font-medium pb-1.5'>Area</p>
                                        <p className='text-sm font-normal'>1503 Sqft</p>
                                    </div>
                                    <div className="farmlandRoadDistance my-2.5">
                                        <p className='uppercase text-[#A0A0A0] text-sm font-medium pb-1.5'>Road Distance</p>
                                        <p className='text-sm font-normal'>1Km</p>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className="farmlandSoil my-2.5">
                                        <p className='uppercase text-[#A0A0A0] text-sm font-medium pb-1.5'>Soil Type</p>
                                        <p className='text-sm font-normal'>Black Soil</p>
                                    </div>
                                    <div className="farmlandAvailability my-2.5">
                                        <p className='uppercase text-[#A0A0A0] text-sm font-medium pb-1.5'>Availability</p>
                                        <p className='text-sm font-normal'>Immediate</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* bottom demand text  */}
                    {/* demand text  */}
                    <div className="text-xs text-[#3F8608] pt-3">
                        <p><RiseOutlined /> &nbsp; Getting high demand than other properties in same location</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SearchCardTablet