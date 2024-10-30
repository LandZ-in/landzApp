import React from 'react'
import { StarFilled } from '@ant-design/icons'
import UserRatingCard from './UserRatingCard'
import { CUSTOMER_REVIEWS } from '../data'
import ProgressBar from './ProgressBar'

const CustomerRating = () => {
    return (
        <>
            <div className='p-0 lg:px-7 mt-5 w-full'>
                <div className='rounded-xl shadow-md px-8 py-10 w-full'>
                    <h3 className='text-xl font-bold'>What people say about this land</h3>

                    {/* rating container contains rating and rating progress bar and write a review button  */}
                    <div className="container flex flex-wrap w-full h-auto justify-between items-center mt-10">
                        {/* rating point out of 5  */}
                        <div className="customer-rating">
                            <p className='text-[#616161] text-xl'><span className='text-[#F99F19] text-8xl font-bold'>4.0</span>out of 5</p>
                        </div>
                        <div className='flex flex-wrap w-3/4 justify-end items-center'>

                            {/* rating progress bar */}
                            <div className="rating-bars w-2/3 px-10">
                                <div className='flex items-center my-3'>
                                    <ProgressBar
                                        width='100%'
                                        strokeColor='#F99F19'
                                        trailColor='#D9D9D9'
                                        percentage={50}
                                        strokeWidth={12}
                                        label={false}
                                    />

                                    <span className='flex ml-2 font-bold text-xl text-[#616161] gap-1.5'>
                                        5 <span><StarFilled /></span>
                                    </span>
                                </div>
                                <div className='flex items-center my-3'>

                                    <ProgressBar
                                        width='100%'
                                        strokeColor='#F99F19'
                                        trailColor='#D9D9D9'
                                        percentage={30}
                                        strokeWidth={12}
                                        label={false}
                                    />
                                    <span className='flex ml-2 font-bold text-xl text-[#616161] gap-1.5'>
                                        4 <span><StarFilled /></span>
                                    </span>
                                </div>
                                <div className='flex items-center my-3'>

                                    <ProgressBar
                                        width='100%'
                                        strokeColor='#F99F19'
                                        trailColor='#D9D9D9'
                                        percentage={40}
                                        strokeWidth={12}
                                        label={false}
                                    />
                                    <span className='flex ml-2 font-bold text-xl text-[#616161] gap-1.5'>
                                        3 <span><StarFilled /></span>
                                    </span>
                                </div>
                                <div className='flex items-center my-3'>

                                    <ProgressBar
                                        width='100%'
                                        strokeColor='#F99F19'
                                        trailColor='#D9D9D9'
                                        percentage={10}
                                        strokeWidth={12}
                                        label={false}
                                    />
                                    <span className='flex ml-2 font-bold text-xl text-[#616161] gap-1.5'>
                                        2 <span><StarFilled /></span>
                                    </span>
                                </div>
                                <div className='flex items-center my-3'>

                                    <ProgressBar
                                        width='100%'
                                        strokeColor='#F99F19'
                                        trailColor='#D9D9D9'
                                        percentage={0}
                                        strokeWidth={12}
                                        label={false}
                                    />

                                    <span className='flex ml-2 font-bold text-xl text-[#616161] gap-1.5'>
                                        1 <span><StarFilled /></span>
                                    </span>
                                </div>
                            </div>
                            {/* write a review button  */}
                            <div className="write-a-review">
                                <button
                                    className="bg-[#065E14] py-4 text-white rounded-2xl px-16"
                                >
                                    Write Review
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* Customer reviews */}
                    <div className='flex flex-wrap w-full justify-between mt-5'>
                        {CUSTOMER_REVIEWS.map((data) => (
                            <UserRatingCard key={data.user} user={data.user} comment={data.comment} img={data.img} />
                        ))}

                    </div>

                    {/* load more button  */}

                    <div className="flex justify-center mt-10">
                        <button
                            type="primary"
                            className="bg-[#065E14] py-4 text-white rounded-2xl w-56"
                        >
                            Load More
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerRating