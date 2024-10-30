import React, { useState } from 'react'
// import '../../assets/css/App.css'
import farmland from '../images/farmland.jpg'
import { EnvironmentOutlined, StarOutlined, HeartOutlined, ShareAltOutlined, HeartFilled, RiseOutlined } from '@ant-design/icons'

const FarmlandSearchCard = () => {
  const [isFav, setIsFav] = useState(false)
  return (
    <>
      <div className=" w-full rounded-xl p-[1px] bg-gradient-to-r from-[#95C698] via-[#C2C681] to-[#E4C56F]">
      {/* main card box  */}
        <div className="p-2 flex w-full h-full bg-white rounded-xl">
          {/* image container  */}
          <div className="image relative h-full">
            <img src={farmland} alt="Farmland" className='h-40 rounded-sm relative' />

            <div className="top-container absolute top-2 flex text-xs gap-3 h-auto items-center">
              <div className="verified-text text-white bg-[#065E14] py-0.5 ps-2 pe-5">
                Verified
              </div>
              <div className="rating bg-amber-400 py-0.5 rounded-full px-2 text-[10px] font-bold">
                <StarOutlined className='font-bold' /> 4.2
              </div>
            </div>
            <div className="bottom-text absolute bottom-0 text-white text-xs py-1 px-2 w-full" style={{ backgroundColor: "#0000004a" }}>
              30 people are viewing this property
            </div>
          </div>

          {/* right side content container  */}
          <div className="content px-1 ps-4 w-3/4 text-[#333333]">
            {/* top location and button box  */}
            <div className="top-location flex justify-between h-auto items-center">
              <div className="area text-sm">
                <EnvironmentOutlined className='text-lg' /> Srisailam Highway, Hyderabad
              </div>
              <div className="area-action space-x-3">
                <button
                  onClick={(e) => isFav ? setIsFav(false) : setIsFav(true)}
                >
                  {isFav ? <HeartFilled /> : <HeartOutlined />}
                </button>
                <button><ShareAltOutlined /></button>
                <button type="primary" className="bg-[#065E14] text-white btn primaryBtn">Contact</button>
              </div>
            </div>
            {/* rate box  */}
            <div className="rate pt-2">
              <p className=''><span className='text-[#065E14] font-bold'>5.25 Cr</span> &nbsp; | &nbsp; 1377/Sqft</p>
            </div>

            {/* data of farmland container */}
            <div className="farmlandData flex gap-12 pt-4 font-bold">
              <div className="farmalandArea">
                <p className='uppercase text-[#A0A0A0] text-sm font-medium pb-1.5'>Area</p>
                <p className='text-sm'>1503 Sqft</p>
              </div>
              <div className="farmlandRoadDistance">
                <p className='uppercase text-[#A0A0A0] text-sm font-medium pb-1.5'>Road Distance</p>
                <p className='text-sm'>1Km</p>
              </div>
              <div className="farmlandSoil">
                <p className='uppercase text-[#A0A0A0] text-sm font-medium pb-1.5'>Soil Type</p>
                <p className='text-sm'>Black Soil</p>
              </div>
              <div className="farmlandAvailability">
                <p className='uppercase text-[#A0A0A0] text-sm font-medium pb-1.5'>Availability</p>
                <p className='text-sm'>Immediate</p>
              </div>
            </div>

            {/* demand text  */}
            <div className="text-xs text-[#3F8608] pt-3">
              <p><RiseOutlined /> &nbsp; Getting high demand than other properties in same location</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FarmlandSearchCard