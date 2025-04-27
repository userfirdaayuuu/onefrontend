import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CourseContext } from "../../../Providers/CourseContext";
import TutorCourseItem from "../TutorCourseItem/TutorCourseItem";
import { MdOutlineUploadFile } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as bootstrap from "bootstrap";
import "./TutorCourseDisplay.css";


const TutorCourseDisplay = () => {
  const { course_name } = useParams();
  const { course_list } = useContext(CourseContext);

  const [judul, setJudul] = useState("");
  const [file, setFile] = useState(null);

  if (!course_list) return <h2>Loading...</h2>;

  const filteredCourses = course_list.filter(
    (course) => course.course_name.toLowerCase() === course_name.toLowerCase()
  );

  if (filteredCourses.length === 0) return <h2>Course tidak ditemukan</h2>;

  // 🔧 Fungsi menutup modal + hapus backdrop
  const closeModal = () => {
    const modalEl = document.getElementById("uploadModal");
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    if (modalInstance) modalInstance.hide();

    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) backdrop.remove();

    document.body.classList.remove("modal-open");
    document.body.style = "";
  };

  // ✅ Handle Upload
  const handleUpload = (e) => {
    e.preventDefault();

    if (!judul || !file) {
      toast.error("Judul dan file wajib diisi!");
      return;
    }

    // Proses upload bisa diganti sesuai backend kamu
    console.log("Upload materi:", judul, file);

    toast.success("Materi berhasil diupload!");
    setJudul("");
    setFile(null);
    closeModal();
  };

  return (
    <>
    <ToastContainer/>
      <div className="course-display">
        <h2 className="course-display-title">{course_name.toUpperCase()}</h2>
        <div className="course-display-list">
          {filteredCourses.map((item) => (
            <TutorCourseItem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>

      {/* ICON UPLOAD */}
      <div className="upload-icon">
        <button
          className="upload-trigger"
          data-bs-toggle="modal"
          data-bs-target="#uploadModal"
        >
          <MdOutlineUploadFile size={28} />
        </button>
      </div>

      {/* MODAL UPLOAD */}
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
              <form onSubmit={handleUpload}>
                <div className="mb-3">
                  <label className="form-label">Judul Materi</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Judul Materi"
                    value={judul}
                    onChange={(e) => setJudul(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">File Materi</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorCourseDisplay;
