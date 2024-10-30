import React from 'react'
import SimilarAgriLandCard from './SimilarAgriLandCard'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const SimilarAgriLands = () => {
  return (
    <>
        
        {/* Carousel Cards */}
        <div className="flex flex-wrap gap-5">
        <SimilarAgriLandCard />
        <SimilarAgriLandCard />
        <SimilarAgriLandCard />
        <SimilarAgriLandCard />
        </div>

        {/* Carousel buttons  */}
        <div className="carousel-buttons flex justify-center gap-10 mt-7">
            <button className='border-2 py-3 px-7 border-black rounded-full' disabled> <FaArrowLeftLong className='text-4xl'/> </button>
            <button className='border-2 py-3 px-7 border-black rounded-full'> <FaArrowRightLong className='text-4xl' /> </button>
        </div>
    </>
  )
}

export default SimilarAgriLands