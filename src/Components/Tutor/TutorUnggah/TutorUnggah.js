import React from "react";
import { MdOutlineUploadFile } from "react-icons/md";
import "./TutorUnggah.css"; // Ini style khusus modalnya

const TutorUnggah = () => {
  return (
    <>
      {/* Tombol icon upload */}
      <button
        className="upload-trigger"
        data-bs-toggle="modal"
        data-bs-target="#uploadModal"
      >
        <MdOutlineUploadFile size={24} />
      </button>

      {/* Modal Upload */}
      <div className="modal fade" id="uploadModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content custom-modal-width">
            <div className="modal-header">
              <h5 className="modal-title">Upload Materi</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Judul Materi</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Judul Materi"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">File Materi</label>
                  <input type="file" className="form-control" />
                </div>
              </form>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-secondary me-2"
                data-bs-dismiss="modal"
              >
                Batal
              </button>
              <button type="submit" className="btn btn-primary">
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorUnggah;
