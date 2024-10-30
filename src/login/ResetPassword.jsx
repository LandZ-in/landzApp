
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const navigate = useNavigate();

  return (
    <aside className='login-form-data'>
    <div className="back-to-login"
        onClick={() => navigate(-3)}
    >
        <MdKeyboardBackspace /> <span>Back to Login</span>

    </div>


    <div className="forgot-password">
        <h1>Reset Password</h1>
        <p>Set a new password to unlock a realm of possibilities with ease</p>

        <form className="login-form">
            <label htmlFor="new-password">New Password</label>
            <input type="password" id="new-password" placeholder="6 characters, 1 Capital Letter" />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="6 characters, 1 Capital Letter" />

            <button
                type="submit"
                className="login-button"
                onClick={() => navigate('/login')}
            >
                Reset Password
            </button>
        </form>
    </div>
</aside>
  )
}

export default ResetPassword