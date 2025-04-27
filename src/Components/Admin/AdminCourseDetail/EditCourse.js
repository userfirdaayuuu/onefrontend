// src/Components/Course/EditCourse.js
import React, { useState, useEffect } from 'react';

const EditCourse = () => {
  // Simulasi ambil data dari backend
  const [course, setCourse] = useState({
    name: '',
    description: '',
    tutor: ''
  });

  useEffect(() => {
    // Simulasikan data yang di-fetch
    const dummyCourse = {
      name: 'Matematika Kelas 9',
      description: 'Materi persiapan Ujian Nasional',
      tutor: 'Bu Sari'
    };
    setCourse(dummyCourse);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data kursus yang diperbarui:', course);
    alert('Informasi kursus berhasil diperbarui (simulasi)');
    // nanti bisa pakai axios.put(`/api/course/${course.id}`, course)
  };

  return (
    <div className="container mt-4">
      <h3>Edit Informasi Kursus</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nama Kursus:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={course.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Deskripsi:</label>
          <textarea
            className="form-control"
            name="description"
            rows={3}
            value={course.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label>Nama Tutor:</label>
          <input
            type="text"
            className="form-control"
            name="tutor"
            value={course.tutor}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Simpan Perubahan</button>
      </form>
    </div>
  );
};

export default EditCourse;
