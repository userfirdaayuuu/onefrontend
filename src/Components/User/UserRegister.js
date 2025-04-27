import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './user.css';

const UserRegister = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate(); // buat handle button back

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleBack = () => {
    navigate('/dashboard'); // arahkan ke dashboard
  };

  return (
    <Container className="form-container">
      <h2 className="form-title">Registration</h2>
      <Form>
        <Form.Group className="form-group">
          <Form.Label className="form-label">Pilih Role</Form.Label>
          <Form.Select onChange={handleRoleChange} value={role}>
            <option value="">-- Pilih Role --</option>
            <option value="admin">Admin</option>
            <option value="tutor">Tutor</option>
            <option value="siswa">Siswa</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label className="form-label">Nama</Form.Label>
          <Form.Control type="text" placeholder="Masukkan nama" />
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label className="form-label">Email</Form.Label>
          <Form.Control type="email" placeholder="Masukkan email" />
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label className="form-label">Password</Form.Label>
          <Form.Control type="password" placeholder="Masukkan password" />
        </Form.Group>

        {/* Form tambahan berdasarkan role */}
        {role === "tutor" && (
          <Form.Group className="form-group">
            <Form.Label className="form-label">Spesialisasi Tutor</Form.Label>
            <Form.Control type="text" placeholder="Masukkan bidang ajar" />
          </Form.Group>
        )}

        {role === "siswa" && (
        <>
            <Form.Group className="form-group">
            <Form.Label className="form-label">Kelas</Form.Label>
            <Form.Control type="text" placeholder="Masukkan kelas (ex: 9 SMP)" />
            </Form.Group>

            <Form.Group className="form-group">
            <Form.Label className="form-label">Pilih Kursus</Form.Label>
            <Form.Select>
                <option value="">-- Pilih Kursus --</option>
                <option value="matematika">Matematika</option>
                <option value="bahasa_inggris">Bahasa Inggris</option>
                <option value="fisika">Fisika</option>
                {/* Kamu bisa tambah kursus lain di sini */}
            </Form.Select>
            </Form.Group>
        </>
        )}


        <div className="forgot-password">
          Already registered? <Link to="/login">Click here</Link>
        </div>

        <Row className="button-row">
          <Col>
            <Button variant="secondary" className="button-back" onClick={handleBack}>
              Back
            </Button>
          </Col>
          <Col>
            <Button variant="primary" className="button-submit" type="submit">
              Daftar
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default UserRegister;
