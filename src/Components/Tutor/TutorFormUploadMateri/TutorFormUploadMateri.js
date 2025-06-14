import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import AuthServices from "../../../Auth/AuthServices";
import "./TutorFormUploadMateri.css";

const schema = yup.object().shape({
  judul_materi: yup.string().required("Judul wajib diisi"),
  deskripsi_materi: yup.string().required("Deskripsi wajib diisi"),
  file: yup
    .mixed()
    .test("required", "File wajib diunggah", (value) => value && value.length > 0)
    .test("type", "File harus berupa PDF", (value) => {
      return value && value[0]?.type === "application/pdf";
    }),
  video_url: yup.string().url("Link tidak valid").notRequired(),
});

const UploadMateri = () => {
  const navigate = useNavigate();
  const { id: kursusId } = useParams();
  const [uploading, setUploading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset, // buat reset form setelah submit
  } = useForm({
    resolver: yupResolver(schema),
  });

  const selectedFile = watch("file");

  const onSubmit = async (data) => {
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append("kursus_id", kursusId); // tambahkan ini!
      formData.append("judul_materi", data.judul_materi);
      formData.append("deskripsi_materi", data.deskripsi_materi);
      if (data.video_url) formData.append("video_url", data.video_url);
      formData.append("document", data.file[0]);

      const res = await AuthServices.uploadMaterial(kursusId, formData);
      toast.success("Materi berhasil diunggah!");
      reset(); // kosongkan form
      navigate(-1); // balik ke halaman sebelumnya
    } catch (err) {
      toast.error("Gagal mengunggah materi. Coba lagi.");
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="page-upload">
      <Container className="upload-form-container">
        <h2 className="upload-form-title">Unggah Materi Baru</h2>
        <Form onSubmit={handleSubmit(onSubmit)} className="upload-form">
          <Form.Group className="upload-form-group">
            <Form.Label>Judul Materi</Form.Label>
            <Form.Control
              type="text"
              isInvalid={!!errors.judul_materi}
              {...register("judul_materi")}
            />
            <Form.Control.Feedback type="invalid">
              {errors.judul_materi?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="upload-form-group">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              isInvalid={!!errors.deskripsi_materi}
              {...register("deskripsi_materi")}
            />
            <Form.Control.Feedback type="invalid">
              {errors.deskripsi_materi?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="upload-form-group">
            <Form.Label>Unggah PDF</Form.Label>
            <Form.Control
              type="file"
              accept=".pdf"
              isInvalid={!!errors.file}
              {...register("file")}
            />
            <Form.Control.Feedback type="invalid">
              {errors.file?.message}
            </Form.Control.Feedback>
            {selectedFile && selectedFile[0] && (
              <Form.Text muted>{selectedFile[0].name}</Form.Text>
            )}
          </Form.Group>

          <Form.Group className="upload-form-group">
            <Form.Label>Link Video (Opsional)</Form.Label>
            <Form.Control
              type="url"
              isInvalid={!!errors.video_url}
              {...register("video_url")}
            />
            <Form.Control.Feedback type="invalid">
              {errors.video_url?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="upload-form-button-group">
            <Button type="submit" variant="primary" disabled={uploading}>
              {uploading ? "Mengunggah..." : "Unggah Materi"}
            </Button>
            <Button type="button" variant="secondary" onClick={() => navigate(-1)}>
              Batal
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default UploadMateri;
