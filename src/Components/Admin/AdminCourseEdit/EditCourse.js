import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Spinner } from 'react-bootstrap';
import AuthServices from '../../../Auth/AuthServices';
import './EditanCourse.css';
import { toast } from 'react-toastify';

const schema = Yup.object().shape({
  deskripsi: Yup.string()
    .required('Deskripsi wajib diisi')
    .min(10, 'Minimal 10 karakter'),
  durasi: Yup.string()
    .required('Durasi wajib diisi'),
  jadwal: Yup.string()
    .required('Jadwal wajib diisi'),
  modul: Yup.string()
    .required('Modul kursus wajib diisi'),
});

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [kursus, setKursus] = useState(null);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    const fetchKursus = async () => {
    try {
      const data = await AuthServices.getKursusDetail(id);
      setKursus(data);
      reset({
        deskripsi: data.deskripsi || '',
        durasi: data.durasi || '',
        jadwal: data.jadwal || '',
        modul: data.modul || '',
      });
    } catch (err) {
        toast.error("Gagal memuat data kursus");
      } finally {
        setLoading(false);
      }
    };
    fetchKursus();
  }, [id, reset]);
  

  const onSubmit = async (formData) => {
    try {
      await AuthServices.updateKursusDetail(id, formData);
      toast.success("Kursus berhasil diperbarui!");
      navigate(`/course/${id}?refresh=${Date.now()}`);
    } catch (error) {
      toast.error("Gagal memperbarui kursus");
    }
  };

  if (loading) return <Spinner animation="border" variant="primary" />;

  if (!kursus) return <p>Kursus tidak ditemukan.</p>;

  return (
    <div className="edit-page">
      <Container className="edit-course-container">
        <h3 className="edit-course-title">Edit Informasi Kursus {kursus.nama_kursus}</h3>

        <Form onSubmit={handleSubmit(onSubmit)}>

          <Form.Group className="edit-course-group">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control as="textarea" rows={3} {...register('deskripsi')} isInvalid={!!errors.deskripsi} />
            <Form.Control.Feedback type="invalid">{errors.deskripsi?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="edit-course-group">
            <Form.Label>Durasi</Form.Label>
            <Form.Control type="text" {...register('durasi')} isInvalid={!!errors.durasi} />
            <Form.Control.Feedback type="invalid">{errors.durasi?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="edit-course-group">
            <Form.Label>Jadwal</Form.Label>
            <Form.Control type="text" {...register('jadwal')} isInvalid={!!errors.jadwal} />
            <Form.Control.Feedback type="invalid">{errors.jadwal?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="edit-course-group">
            <Form.Label>Modul</Form.Label>
            <Form.Control type="text" {...register('modul')} isInvalid={!!errors.modul} />
            <Form.Control.Feedback type="invalid">{errors.modul?.message}</Form.Control.Feedback>
          </Form.Group>

          <div className="d-flex justify-content-between mt-4">
            <Button variant="secondary" onClick={() => navigate(-1)}>Kembali</Button>
            <Button variant="success" type="submit" className="ms-2">Simpan</Button>
          </div>

        </Form>

      </Container>
    </div>
  );
};

export default EditCourse;
