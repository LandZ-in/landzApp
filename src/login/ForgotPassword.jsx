
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate();
    
    return (
        <aside className='login-form-data'>
            <div className="back-to-login"
                onClick={() => navigate(-1)}
            >
                <MdKeyboardBackspace /> <span>Back to Login</span>

            </div>


            <div className="forgot-password">
                <h1>Forgot Password?</h1>
                <p>Reset your password and regain access to yourt account</p>

                <form className="login-form">
                    <label htmlFor="email">Email/ Mobile Number</label>
                    <input type="text" id="email" placeholder="Email/ Mobile number" />

                    <button
                        type="submit"
                        className="login-button"
                        onClick={() => navigate('/otp-verification')}
                    >
                        Get OTP
                    </button>
                </form>
            </div>
        </aside>
    )
}

export default ForgotPassword