import React from 'react'
import banner  from '../images/banner.png'
import '../style.css'

const HeadBanner = () => {
    return (
        <>
            <div className="relative w-full h-[160px] bg-gradient-to-r from-[#B5CFB8] via-[#CBDCCE] to-[#E4E3DC] flex items-center justify-between overflow-hidden">
                {/* Breadcrumb */}
                {/* This is normal way there is another easy way to create breadcrumb using antd that i've used in land profile page  */}
                <div className="absolute top-6 text-[#475467] ms-20" >
                    <p className="text-sm">
                        Home {">"} <span className="text-[#475467]">Property Listings</span> {">"} <span className="text-green-900">Farmlands</span>
                    </p>
                </div>

                {/* Text Section */}
                <div className="ms-20 mt-10">
                    <h1 className="text-4xl font-bold text-black">Find Your Dream Farmland</h1>
                    <p className="mt-4 text-[#333333]">
                        Discover the ideal farmland for your agricultural needs with our comprehensive listings and advanced search filters.
                    </p>
                </div>
                {/* Image Section */}
                <div className="h-full">
                    <img
                        className="object-cover h-64 w-96 rounded-tl-[50%] rounded-bl-[100%]"
                        src={banner}
                        alt="Farmland"
                    />
                </div>
            </div>
        </>
    )
}

export default HeadBanner