import React from 'react'
import { PROPERTY_PRICE_DETAILS } from '../data'

const LandPricingDetails = () => {
    return (
        <>
            <div className="propertyPriceDetails flex flex-wrap justify-between w-full">
                {PROPERTY_PRICE_DETAILS.map((data) => (
                    <div className="w-1/2 mt-4 md:w-1/3 lg:w-1/5">
                        <div>
                            <p className='uppercase mb-3'>{data.title}</p>
                            <p>{data.detail}</p>
                        </div> 
                    </div>
                ))}
            </div>

            <div className='mt-4'>
                <h2 className='font-semibold text-lg'>Land description</h2>
                <p className='my-4 text-[#616161]'>
                    Discover an exceptional opportunity with this prime agricultural land located on Srisailam Highway, Hyderabad. Spanning 50 acres, this fertile land offers rich loam soil perfect for a variety of crops and farming activities. The strategic location provides easy access to major markets and infrastructure, ensuring a seamless supply chain and efficient transportation of goods. Proximity to essential amenities such as water, electricity, and road connectivity further enhances the land's appeal, making it a highly desirable investment for agricultural entrepreneurs.
                </p>

                <p className='text-[#616161]'>
                    In addition to its agricultural potential, the land is situated in a growing area with future development prospects. Whether you are looking to expand your farming operations, invest in land for future development, or seek a serene environment for eco-friendly projects, this property offers limitless possibilities. With the rapid development along Srisailam Highway and increasing demand for agricultural produce, this land is poised to deliver substantial returns on investment. Seize this unique opportunity to own a valuable piece of land in one of Hyderabad's promising corridors.
                </p>
            </div>
        </>
    )
}

export default LandPricingDetails