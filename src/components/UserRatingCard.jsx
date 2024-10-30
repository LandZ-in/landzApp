import React from 'react'


const UserRatingCard = ({...props}) => {
    return (
        <>
            <div className="container sm:w-full md:w-1/2 lg:w-[32%] shadow-md rounded-lg p-4">
                <div className="comment">
                    <p className='font-light text-[#616161] text-sm'>{props.comment}</p>
                </div>

                <div className="user-data flex items-center gap-4 mt-4">
                    <img
                        src={props.img}
                        alt={props.user}
                        className=' w-12 h-12 rounded-full object-cover'
                    />
                    <span className='text-[#065E14] font-bold'>{props.user}</span>
                </div>
            </div>
        </>
    )
}

export default UserRatingCard