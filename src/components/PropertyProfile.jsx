import React, { useState } from 'react'
import '../style.css'
import farmland from '../images/farmland.jpg';
import farmland2 from '../images/farmland2.jpg'
import farmland3 from '../images/farmland3.jpg'
import profile from '../images/profile.jpg';
import { EnvironmentOutlined, HeartFilled, HeartOutlined, RiseOutlined, ShareAltOutlined, StarOutlined } from '@ant-design/icons'
import { PiIslandDuotone } from "react-icons/pi";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaRoad } from "react-icons/fa";
import { BsGeoAlt } from "react-icons/bs";
import { MdEventAvailable } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { GiTreeBranch } from "react-icons/gi";
import { PiBuildingOffice } from "react-icons/pi";
import { MdOutlineAgriculture } from "react-icons/md";
import { useNavigate,} from 'react-router-dom';
const images = [farmland, farmland2, farmland3];

const PropertyProfile = () => {
    const [isFav, setIsFav] = useState(false)
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const navigate = useNavigate()
    // Handle image click
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };


    return (
        <>
            {/* main container  */}
            <div className='px-7 w-full flex'>
                {/* left side container  */}
                <div className="bg-white rounded-xl shadow-md p-4 w-[80%] landprofile">
                    {/* Main content container */}
                    <div className="flex flex-col lg:flex-row">
                        {/* Left side - Images */}
                        <div className="lg:w-1/2">
                            <div className="relative text-[#065e14]">

                                <img
                                    src={selectedImage}
                                    alt={selectedImage}
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                                {/* Icons */}
                                <button
                                    onClick={(e) => isFav ? setIsFav(false) : setIsFav(true)}
                                    className="absolute top-2 left-2 bg-white p-1 px-2 tex-xl rounded-lg shadow-md"
                                >
                                    {isFav ? <HeartFilled /> : <HeartOutlined />}
                                </button>
                                <button className="absolute top-2 right-2 bg-white p-1 px-2 rounded-lg text-xl shadow-md">
                                    <ShareAltOutlined />
                                </button>
                            </div>
                            {/* Preview images */}
                            <div className="grid grid-cols-3 gap-2 mt-2">


                                {images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        onClick={() => handleImageClick(image)}
                                        className="w-full h-28 object-cover rounded-lg"
                                    />
                                ))}

                            </div>
                        </div>

                        {/* Right side - Content */}
                        <div className="lg:w-1/2 lg:pl-4 mt-4 lg:mt-0">
                            {/* property heading  */}
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-semibold">Agriculture Land for Sale</h3>
                                <div className="flex items-center gap-2">
                                    <span className="bg-[#FBBC05] text-sm py-1.5 px-3 rounded-full"> <StarOutlined />4.2</span>
                                    <span className="bg-[#34A853] text-white text-sm px-3 py-1.5 rounded-full">Verified</span>
                                </div>
                            </div>


                            <p className="text-gray-500 mt-2"> <EnvironmentOutlined className='text-red-700 txt-xl' /> Plot 10, Mitra Space, Srisailam Highway, Hyderabad, Telangana</p>
                            <a href="#" className="text-blue-500 underline text-xs font-bold">View on map</a>


                            <p className='font-bold text-lg mt-3'>3 Acres</p>

                            {/* Property price  */}
                            <div className="flex items-center mt-4">
                                <h3 className="text-3xl font-bold">₹ 10.25 Cr</h3>
                                <span>&nbsp; &nbsp;| </span>
                                <span className="text-gray-500 text-xs ml-2">₹ 3377/Sqft</span>
                            </div>

                            {/* details of land property  */}
                            <div className="flex justify-between items-center flex-wrap">
                                <div className='features mt-4 flex items-center basis-1/3'>
                                    {/* Change these Icons to SVG or image provided  */}
                                    < PiIslandDuotone className='text-2xl me-2' />
                                    <div>
                                        <p className="text-xs font-light uppercase">Soil Type</p>
                                        <p className="text-sm font-semibold">Red Soil</p>
                                    </div>
                                </div>
                                <div className='features mt-4 flex items-center basis-1/3'>
                                    <MdOutlineWaterDrop className='text-2xl me-2' />
                                    <div>
                                        <p className="text-xs font-light uppercase">Water</p>
                                        <p className="text-sm font-semibold">Adequate</p>
                                    </div>
                                </div>

                                <div className='features mt-4 flex items-center basis-1/3'>
                                    <FaRoad className='text-2xl me-2' />
                                    <div>
                                        <p className="text-xs font-light uppercase">Road Distance</p>
                                        <p className="text-sm font-semibold">1 Km</p>
                                    </div>
                                </div>
                                <div className='features mt-4 flex items-center basis-1/3'>
                                    <BsGeoAlt className='text-2xl me-2' />
                                    <div>
                                        <p className="text-xs font-light uppercase">Land Access</p>
                                        <p className="text-sm font-semibold">...</p>
                                    </div>
                                </div>
                                <div className='features mt-4 flex items-center basis-1/3'>
                                    <MdEventAvailable className='text-2xl me-2' />
                                    <div>
                                        <p className="text-xs font-light uppercase">Availability</p>
                                        <p className="text-sm font-semibold">Immediate</p>
                                    </div>
                                </div>
                                <div className='features mt-4 flex items-center basis-1/3'>
                                    <GrTransaction className='text-2xl me-2' />
                                    <div>
                                        <p className="text-xs font-light uppercase">Last Transaction</p>
                                        <p className="text-sm font-semibold">...</p>
                                    </div>
                                </div>
                                <div className='features mt-4 flex items-center basis-1/3'>
                                    <GiTreeBranch className='text-2xl me-2' />
                                    <div>
                                        <p className="text-xs font-light uppercase">Crops</p>
                                        <p className="text-sm font-semibold">Wheat, Paddy</p>
                                    </div>
                                </div>
                                <div className='features mt-4 flex items-center basis-1/3'>
                                    <PiBuildingOffice className='text-2xl me-2' />
                                    <div>
                                        <p className="text-xs font-light uppercase">MRO Office</p>
                                        <p className="text-sm font-semibold">...</p>
                                    </div>
                                </div>
                                <div className='features mt-4 flex items-center basis-1/3'>
                                    <MdOutlineAgriculture className='text-2xl me-2' />
                                    <div>
                                        <p className="text-xs font-light uppercase">Property zone</p>
                                        <p className="text-sm font-semibold">Agriculture</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right side container  */}
                <aside className='w-[20%] ps-5'>
                    {/* upper profile box  */}
                    <div className="profile-container bg-[#F0FDF2] rounded-lg p-4">
                        <div className="profile flex justify-between">
                            <div className="profile-image text-center">
                                <img src={profile} alt="Profile" className='w-12 rounded-full' />
                                <p className='text-[#A0A0A0] text-xs'>Posted by</p>
                            </div>

                            <div className="customer-rating mt-2">
                                <span className="bg-[#FBBC05] text-sm py-1.5 px-3 rounded-full"> <StarOutlined />4.0</span>
                            </div>
                        </div>

                        <p className='text-sm my-2'>Owner (1 week ago)</p>

                        <button className='my-2 bg-[#065E14] text-white py-2 w-full rounded-lg' >Contact Owner</button>
                        <button className='mt-2 border-[#065E14] border-2 text-[#065E14] font-semibold py-2 w-full rounded-lg' onClick={() => navigate('/schedule-visit-page')}>Schedule Visit</button>
                    </div>

                    {/* lower demand box  */}
                    <div className="demand-details border-[#FBBC05] border-2 bg-[#FFF6E9]  rounded-xl mt-3 text-xs p-4">
                        <p className=' text-[#616161]'><span className='text-[#3F8608]'> <RiseOutlined /> +2.3% high demand</span> (In last 10 days)</p>
                        <ul className='list-disc m-3 mb-0 space-y-2'>
                            <li>30 people are viewing this property</li>
                            <li>5 inquiries have been made about this property in the last 24 hours</li>
                        </ul>
                    </div>
                </aside>
            </div>
        </>

    )
}

export default PropertyProfile