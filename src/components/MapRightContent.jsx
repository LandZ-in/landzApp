import React from 'react'
import SearchCardTablet from './SearchCardTablet'
import { useNavigate } from 'react-router-dom'


const MapRightContent = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="right lg:w-[40%] md:w-full ps-5 mt-28">
                <div className="mt-3 cursor-pointer" onClick={() => navigate('/land-profile')}>
                    <SearchCardTablet />
                </div>
                <div className="mt-3 cursor-pointer" onClick={() => navigate('/land-profile')}>
                    <SearchCardTablet />
                </div>
                <div className="mt-3 cursor-pointer" onClick={() => navigate('/land-profile')}>
                    <SearchCardTablet />
                </div>
                <div className="mt-3 cursor-pointer" onClick={() => navigate('/land-profile')}>
                    <SearchCardTablet />
                </div>
                <div className="mt-3 cursor-pointer" onClick={() => navigate('/land-profile')}>
                    <SearchCardTablet />
                </div>
            </div>
        </>
    )
}

export default MapRightContent