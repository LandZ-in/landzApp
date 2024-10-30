import React from 'react'
import { WHY_CHOOSE_OUR_APP } from '../data'

const ListRightContent = () => {
    return (
        <>
            {/* List Search Right size content  */}
            <div className="right w-full lg:w-[40%] mt-10 lg:mt-0 ps-0 lg:ps-16">
                <div className="rightTopBox bg-[#064E15] text-white px-10 py-7 rounded-2xl">
                    <h3 className='text-lg font-semibold'>Ready to Sell or Lease Your Land?</h3>
                    <p className='text-sm py-7'>List your property for sale or lease effortlessly and connect with potential buyers or lesses worldwide using our user-friendly posting tools</p>
                    <div className="flex justify-center">
                        <button className='text-[#064E15] bg-white px-5 py-3 rounded-lg font-bold'>Post Land Details</button>
                    </div>
                </div>

                <div className="why-choose-us bg-gradient-to-br from-[#DEE9E0] via-[#E0EAE1] to-[#E9E8E2] rounded-2xl border-t-2 border-t-[#065E14] mt-10 px-10 py-7 pb-2">
                    <h3 className='text-lg font-semibold mb-6'>Why Choose Our App for Buying or Selling Land? </h3>
                    {WHY_CHOOSE_OUR_APP.map((data) => (
                        <div key={data.id} className='mb-6'>
                            <p className='text-[#065E14] font-semibold mb-2.5'>{data.title}</p>
                            <p className='text-sm text-[#475467]'>{data.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ListRightContent