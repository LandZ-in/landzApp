import React from 'react'
import { LAND_PROFILE_OWNER_DETAILS } from '../data'

const LandOwnerDetails = () => {
    return (
        <>
                {LAND_PROFILE_OWNER_DETAILS.map((data) => (
                    <div className="container" key={data.title}>
                        <p>Land Title Owner: {data.title}</p>
                        <p>Posted By: {data.postedBy}</p>
                        <p>Mobile Number: {data.mobile}</p>
                        <p>Email: {data.email}</p>
                    </div>
                ))}
        </>
    )
}

export default LandOwnerDetails