import React, { useState } from 'react'
import HeadBanner from '../components/HeadBanner';
// import { Radio, Input, button } from 'antd'
import { SearchOutlined, FilterOutlined, MenuOutlined, EnvironmentOutlined } from '@ant-design/icons'
import ListViewSearch from '../components/ListViewSearch'
import MapViewSearch from '../components/MapViewSearch'
import ListRightContent from '../components/ListRightContent'
import MapRightContent from '../components/MapRightContent'
import '../index.css'

const PropertyListings = () => {
    const [filter, setFilter] = useState('list');

    return (
        <>
            {/* Navbar  */}
            {/* <PublicNavbar /> */}
            {/* Heading banner  */}
            <HeadBanner />
            {/* <h2 className='bg-red-500'>tailwind</h2> */}

            {/* content  */}
            <div className="container lg:flex md:block px-10 lg:px-20 pe-10 my-5">
                {/* left content  */}
                <div className="left lg:w-[60%] md:w-full">
                    {/* search block  */}
                    <div className="block lg:flex lg:gap-5">
                        <input
                            className='border-2 border-[#065E14] rounded-lg w-[350px] ps-2'
                            prefix={<SearchOutlined />}
                            value='Srisailam'
                            style={{border: "2px solid #065e14"}}
                        />

                        <div className="flex mt-2 lg:mt-0">
                            <button className='btn px-7 py-1 border-[#065E14] border-2 rounded-lg'> <FilterOutlined /> More Filter</button>
                            <button className='bg-[#065E14] text-white px-10 btn ms-2 property-listing-search py-1 rounded-lg' >Search</button>
                        </div>
                    </div>

                    <div className="search-result flex justify-between mt-5 h-auto items-center">
                        <div className="result-found font-bold">
                            {filter === "list" ? "40 results found" : "12 results found"}
                        </div>


                        <div className="flex items-center space-x-0.5">
                            <button
                                className={`w-16 p-2 rounded-l-lg border-2 border-[#065e14] ${filter === "list" ? "bg-[#065e14] text-white" : "bg-white text-[#065e14]"
                                    }`}
                                onClick={() => setFilter("list")}
                            >
                                <MenuOutlined />
                            </button>

                            <button
                                className={`w-16 p-2 rounded-r-lg border-2 border-[#065e14] ${filter === "map" ? "bg-[#065e14] text-white" : "bg-white text-[#065e14]"
                                    }`}
                                onClick={() => setFilter("map")}
                            >
                                <EnvironmentOutlined />
                            </button>

                        </div>

                    </div>

                    {filter === "list" ? <ListViewSearch /> : <MapViewSearch />}
                </div>

                {/* right content  */}
                {filter === "list" ? <ListRightContent /> : <MapRightContent />}
            </div>
        </>
    )
}

export default PropertyListings