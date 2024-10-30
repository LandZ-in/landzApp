import React, { useRef, useState } from 'react'
import '../profile.css'
import DialogComponent from '../components/DialogComponent';

const profileAction = {
    title: "",
    detail: "",
    action: ""
}

const AccountSettings = () => {
    const [isComponentDialogOpen, setIsComponentDialogOpen] = useState(false);
    const [componentDialogdata, setComponentDialogData] = useState(profileAction)
    const dialogRef = useRef(null);

    const openDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal(); // Show the dialog
        }
    };

    const closeDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.close(); // Close the dialog
        }
    };

    const openComponentDialog = (actionType) => {
        if (actionType === 'deactivate') {
            setComponentDialogData({
                title: "Deactivate Account?",
                detail: "Deactivating your account will hide your profile and listings, nut can reactivate it anytime by logging back in.",
                action: "Deactivate Account"
            })
        } else if (actionType === 'delete') {
            setComponentDialogData({
                title: "Delete Account?",
                detail: "Deleting your account is permanent and will erase all your data and listings, with no option to recover them. Are you sure you want to proceed?",
                action: "Delete Account"
            })
        }
        setIsComponentDialogOpen(true);  // Set state to open the dialog
    };

    const closeComponentDialog = () => {
        setIsComponentDialogOpen(false);  // Set state to close the dialog
    };

    return (
        <>
            <section className='account-settings-section'>
                <div className='section-heading'>
                    <div className="profile-breadcrumb">
                        <span>Profile & Settings / <span className='breadcrumb-active-page'>Account Settings</span></span>
                    </div>
                    <div className='mediumHeading'>
                        <span >Profile </span>
                    </div>
                </div>

                <div className="setting-buttons">
                    <div className="setting-btn change-password" onClick={openDialog}>
                        <span>Change Password</span>
                        <span className="btn-detail">Update your password for enhance protection </span>
                    </div>

                    <div className="setting-btn deactivate-acccount" onClick={() => openComponentDialog('deactivate')}>
                        <span>Deactivate Account</span>
                        <span className="btn-detail">Easily Deactivate your Account Anytime! </span>
                    </div>

                    <div className="setting-btn delete-account" onClick={() => openComponentDialog('delete')}>
                        <span>Delete Account</span>
                        <span className="btn-detail">Permanently Delete Your Account with Ease! </span>
                    </div>

                    <DialogComponent
                        title={componentDialogdata.title}
                        action={componentDialogdata.action}
                        detail={componentDialogdata.detail}
                        isOpen={isComponentDialogOpen}
                        onClose={closeComponentDialog}
                    />


                    {/* change password popup box */}
                    <dialog ref={dialogRef} className="modal-dialog">
                        <div className="modal-header">
                            <h2>Change Password</h2>
                            <button className="close-btn" onClick={closeDialog}>x</button>
                        </div>
                        <form className="modal-form">
                            <div className="form-group">
                                <label>Old Password</label>
                                <input type="password" placeholder="Old Password" />
                            </div>
                            <div className="form-group">
                                <label>New Password</label>
                                <input type="password" placeholder="New Password" />
                            </div>
                            <div className="form-group">
                                <label>Confirm New Password</label>
                                <input type="password" placeholder="Confirm New Password" />
                            </div>
                            <button type="submit" className="submit-btn">Submit</button>
                        </form>
                    </dialog>

                </div>
            </section>
        </>
    )
}

export default AccountSettings