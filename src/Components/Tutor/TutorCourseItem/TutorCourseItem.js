import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import { toast } from "react-toastify";

import "../../Style/Material.css";
import AuthServices from "../../../Auth/AuthServices";

const TutorCourseItem = ({ id, name, onDelete, courseId }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  // Toggle menu tampil
  const toggleMenu = (e) => {
    e.stopPropagation();
    setShowMenu((prev) => !prev);
  };

  // Deteksi klik di luar menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Hapus materi
  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus materi ini?");
      if (!confirmDelete) return;

      const response = await AuthServices.deleteMateri(id);
      if (response.success) {
        toast.success("Materi berhasil dihapus");
        onDelete(id);
      }
    } catch (error) {
      console.error("Error saat menghapus materi:", error);
      toast.error("Gagal menghapus materi. Silakan coba lagi.");
    }
  };

  return (
    <div ref={menuRef}>
      <Card className="materi-card shadow-sm h-100">
            <Card.Body className="d-flex flex-column justify-content-between">

          {/* Tombol Menu */}
          <div className="menu-button" onClick={toggleMenu}>
            <BsThreeDotsVertical className="dots-icon" />
          </div>

          {/* Dropdown Menu */}
          {showMenu && (
            <div className="card-menu-dropdown" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => handleDelete(id)}>Hapus Materi</button>
            </div>
          )}

          {/* Judul dan tombol */}
        <div>
                  <Card.Title className="materi-title mb-3">
                    {name || "Tanpa Judul"}
                  </Card.Title>
                </div>
                <div className="mt-auto d-grid">
                  <Button
                    className="btn-lihat-materi"
                    onClick={() => navigate(`/course-material/${courseId}/${id}`)}
                  >
                    Lihat Materi
                  </Button>
                </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TutorCourseItem;
