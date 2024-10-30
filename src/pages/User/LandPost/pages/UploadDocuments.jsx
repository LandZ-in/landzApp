import React, { useRef, useState } from 'react'
import { LANDPOST_UPLOAD_DOCUMENT_INTIAL_DATA } from '../../../../data'
import { LuUploadCloud, LuEye, LuPencil, LuTrash2 } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import InfoButton from '../components/InfoButton';
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function UploadDocuments() {
  const [documents, setDocuments] = useState(LANDPOST_UPLOAD_DOCUMENT_INTIAL_DATA);
  const [selectAll, setSelectAll] = useState(false);
  const [sortOrder, setSortOrder] = useState({ key: '', ascending: true });
  const [photos, setPhotos] = useState([]);


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


  // Toggle between checking/unchecking all
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const updatedDocuments = documents.map(doc => ({
      ...doc,
      selected: !selectAll
    }));
    setDocuments(updatedDocuments);
  };

  // Handle sorting toggle
  const handleSort = (key) => {
    const isAscending = sortOrder.key === key ? !sortOrder.ascending : true;
    const sortedDocuments = [...documents].sort((a, b) => {
      if (isAscending) {
        return a[key].localeCompare(b[key]);
      } else {
        return b[key].localeCompare(a[key]);
      }
    });

    setDocuments(sortedDocuments);
    setSortOrder({ key, ascending: isAscending });
  };

  // Handle individual row checkbox change
  const handleCheckboxChange = (index) => {
    const updatedDocuments = [...documents];
    updatedDocuments[index].selected = !updatedDocuments[index].selected;
    setDocuments(updatedDocuments);
  };

  // Handle popup photo upload 
  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setPhotos([...photos, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ photos });
  };

  return (
    <section className='land-upload-document-section'>
      <div className='document-upload-container' >

        <h2>Document Uploads</h2>
        <div>
          <table className="document-table">
            <thead>
              <tr>
                <th>
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                    <span className="checkmark"></span>
                  </label>
                </th>
                <th>Document Name</th>
                <th onClick={() => handleSort('uploadStatus')} className="sortable">
                  Upload Status {sortOrder.key === 'uploadStatus' ? (sortOrder.ascending ? '↑' : '↓') : '↓'}
                </th>
                <th onClick={() => handleSort('verificationStatus')} className="sortable">
                  Verification Status {sortOrder.key === 'verificationStatus' ? (sortOrder.ascending ? '↑' : '↓') : '↓'}
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, index) => (
                <tr key={index}>
                  <td>
                    <label className="custom-checkbox">
                      <input
                        type="checkbox"
                        checked={selectAll || doc.selected || false}
                        onChange={() => handleCheckboxChange(index)}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </td>
                  <td>
                    <div className='document-name'>
                      <div className='doc-name-title'>
                        {doc.name}

                        {/* <ImInfo
                          className='i-icon'
                          onClick={() => setInfoPopup(!infoPopup)}
                        />

                        {infoPopup && (
                          <div className="tooltip-wrapper">
                            <div className="tooltip-content">
                              <div className="tooltip-arrow" />
                              <div className="tooltip-text">
                                {doc.info}
                              </div>
                            </div>
                          </div>
                        )} */}

                        <div className='info-button'>
                          <InfoButton
                            id={doc.id}
                            info={doc.info}
                          />
                        </div>

                      </div>
                      <span>Remarks: {doc.remarks}</span>
                    </div>
                  </td>
                  <td>
                    <div className='upload-status'>
                      <span>
                        <GoDotFill />
                        {doc.uploadStatus}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className='verification-status'>
                      <span>
                        <GoDotFill />
                        {doc.verificationStatus}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="action-icons">
                      <LuUploadCloud
                        title="Upload"
                        className="icon upload-icon"
                        onClick={openDialog}
                      />
                      <LuEye title="View" className="icon view-icon" />
                      <LuPencil title="Edit" className="icon edit-icon" />
                      <LuTrash2 title="Delete" className="icon delete-icon" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        < dialog ref={dialogRef} className="modal-dialog" >
          {/* change password popup box */}
          <div className="modal-header">
            <h2>Upload Document</h2>
            <button className="close-btn" onClick={closeDialog}>x</button>
          </div>

          <form className="modal-upload-form" onSubmit={handleSubmit}>
            <div className="upload-group">
              <div className="upload-box">
                <input type="file" accept="image/png, image/jpeg" onChange={handlePhotoUpload} />
                <div className="upload-placeholder">
                  <AiOutlineCloudUpload className="modal-upload-icon" />
                  <p>Browse and choose the files you want to upload from your device</p>

                </div>
              </div>

              {/* Display Uploaded Photos */}
              <div className="uploaded-files">
                {photos.map((photo, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(photo)}
                    alt={`upload-${index}`}
                    className="uploaded-photo"
                  />
                ))}
              </div>
            </div>

            <div className='form-group'>
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                // checked={taxExcluded}
                // onChange={(e) => setTaxExcluded(e.target.checked)}
                />
                <span className="checkmark"></span>
                I don't want the document
              </label>
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  // checked={priceNegotiable}
                  // onChange={(e) => setPriceNegotiable(e.target.checked)}
                />
                <span className="checkmark"></span>
                I don't want to submit the document
              </label>
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </dialog >

      </div>

    </section>
  )
}
