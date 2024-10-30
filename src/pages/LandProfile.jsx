import React from 'react'
import footer from '../images/footer.jpg';
import { useNavigate } from 'react-router-dom'
import CustomerRating from '../components/CustomerRating'
import Footer from '../components/Footer'
import SimilarLandListings from '../components/SimilarLandListings'
import LandProfileMoreDetails from '../components/LandProfileMoreDetails'
import PropertyProfile from '../components/PropertyProfile'

const LandProfile = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="breadcrumb-banner px-10 lg:px-20 py-2 bg-gradient-to-r from-[#C0D6C3] via-[#E1E8DF] to-[#D2CBBF]">

                <p className='text-sm'>Home &gt; Property Listings &gt; Farmlands &gt; <span className='text-[#065E14] font-semibold'>Land Name</span></p>
            </div>

            <div className="land-profile px-10 lg:px-20 py-5">
                <PropertyProfile />
                <LandProfileMoreDetails />
                <SimilarLandListings />
                <CustomerRating />
            </div>

            {/* Footer last section  */}

            <div
                className='feedback bg-cover bg-center h-60 text-center p-10 text-[#065E14]'
                style={{ backgroundImage: `url(${footer})` }}
            >
                <h3 className='text-4xl font-bold mb-6'>Visited this property?</h3>
                <p>We'd love to hear about your experience. Please take a moment to share your thoughts.</p>

                <div className="flex justify-center mt-6">
                    <button
                        type="primary"
                        className="bg-[#065E14] py-4 text-white rounded-2xl w-56"
                        onClick={() => navigate('/submit-feedback')}
                    >
                        Submit Feedback
                    </button>
                </div>
            </div>

        </>
    )
}

export default LandProfile