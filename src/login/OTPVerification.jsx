import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
    const navigate = useNavigate();
    return (
        <aside className='login-form-data'>
            <div className="back-to-login"
                onClick={() => navigate(-2)}
            >
                <MdKeyboardBackspace /> <span>Back to Login</span>

            </div>

            <div className="otp-verification">
                <h1>OTP Verification</h1>
                <p>Enter the OTP code to proceed with resetting password</p>

                <form className="login-form">
                    <div className="otp-input">
                        <input type="text" className="otp" />
                        <input type="text" className="otp" />
                        <input type="text" className="otp" />
                        <input type="text" className="otp" />
                        <input type="text" className="otp" />
                        <input type="text" className="otp" />
                    </div>

                    <button
                        type="submit"
                        className="login-button"
                        onClick={() => navigate('/reset-password')}
                    >
                        Continue
                    </button>

                    <p className="signup-text">Didn't receive the code? <a href="#">Resend Code</a></p>
                </form>
            </div>
        </aside>
    )
}

export default OTPVerification