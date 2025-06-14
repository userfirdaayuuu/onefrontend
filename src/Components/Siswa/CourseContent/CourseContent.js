import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CourseContent.css";
import BackButton from "../../Common/Back/BackButton";
import { Button } from "react-bootstrap";
import AuthServices from "../../../Auth/AuthServices";

const CourseContent = () => {
  const { courseId, materiId } = useParams();
  const [material, setMaterial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchMaterial = async () => {
      try {
        const response = await AuthServices.getDetailMateriKursus(courseId, materiId);
        if (response.success && response.data) {
          setMaterial(response.data);
        } else {
          throw new Error("Data materi tidak ditemukan");
        }

        const userData = await AuthServices.getUserProfile();
        setUser(userData);

        // const status = await AuthServices.cekSelesai(materiId);
        // setIsCompleted(status.selesai);
      } catch (error) {
        console.error("Gagal ambil data:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMaterial();
  }, [courseId, materiId]);

  const handleComplete = async () => {
    try {
      const res = await AuthServices.tandaiSelesai(materiId);
      if (res.success) {
        setIsCompleted(true);
      }
    } catch (error) {
      console.error("Gagal tandai selesai:", error.message);
    }
  };

  const convertToEmbedUrl = (url) => {
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes("youtube.com") && parsed.searchParams.has("v")) {
        return `https://www.youtube.com/embed/${parsed.searchParams.get("v")}`;
      }
      if (parsed.hostname.includes("youtu.be")) {
        return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}`;
      }
      return url;
    } catch {
      return url;
    }
  };

  if (loading) return <div className="course-content"><p>Loading...</p></div>;
  if (error) return <div className="course-content"><p>⚠️ Oops! {error}. Coba refresh atau cek koneksi yaa!</p></div>;
  if (!material) return <div className="course-content"><p>Materi tidak ditemukan.</p></div>;

  return (
    <div className="course-content">
      <div className="header-detail">
        <BackButton />
        {user?.role === "siswa" && (
          <div className="buttondone">
            <Button
              className={`btn-complete ${isCompleted ? "completed" : ""}`}
              onClick={handleComplete}
              disabled={isCompleted}
            >
              {isCompleted ? "✅ Sudah Selesai" : "✅ Tandai Selesai"}
            </Button>
          </div>
        )}
      </div>

      <div className="course-content-container">
        <h1 className="course-content-title">{material.judul_materi}</h1>
        <p className="course-content-description">{material.deskripsi_materi}</p>

        {material.video_url && (
          <div className="course-content-video">
            <h3>🖥️ Video pembelajaran</h3>
            <iframe
              width="560"
              height="315"
              src={convertToEmbedUrl(material.video_url)}
              title="video pembelajaran"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {material.document && (
          <div className="course-content-dokumen">
            <h3>📄 Dokumen Materi</h3>
            <div className="document-wrapper">
              <iframe
                src={material.document}
                title="Dokumen Materi"
                width="100%"
                height="600px"
                style={{ border: "none" }}
              ></iframe>
            </div>
          </div>
        )}

        <div className="button-group">
          {material.files && material.files.length > 0 && (
            <a
              href={material.files[0].url}
              className="btn-download"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              📥 Unduh Materi
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
