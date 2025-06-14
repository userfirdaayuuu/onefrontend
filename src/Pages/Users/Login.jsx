import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../../Components/Style/Users.css";
import AuthServices from '../../Auth/AuthServices';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useNotify from "../../Components/Common/Hooks/useNotify";

const schema = yup.object().shape({
  email: yup.string().email("Email tidak valid").required("Email wajib diisi"),
  password: yup.string().required("Password wajib diisi"),
});

const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const { notifySuccess, notifyError } = useNotify();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
  try {
      const user = await AuthServices.login(data);
      const token = localStorage.getItem("token");
      const role = user.role;

      if (token) {
        notifySuccess("Login berhasil");
        
        if (role === "admin") {
          navigate("/dashboard/admin");
        } else if (role === "tutor") {
          navigate("/dashboard/tutor");
        } else if (role === "siswa") {
          navigate("/dashboard/siswa");
        } else {
          notifyError("Role tidak dikenali");
        }
      } else {
        notifyError("Token tidak ditemukan");
      }
    } catch (err) {
      const message = (err.response?.data?.error || "Login gagal");
      notifyError(message);
    }
  };

  return (
    <div className="user-page">
    <Container className="user-container">
      <h2 className="user-title">Masuk</h2>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="user-group">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...register("email")}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="user-group">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={showPass ? "text" : "password"}
            {...register("password")}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
          <Form.Check
            type="checkbox"
            label="Tampilkan Password"
            className="mt-2"
            onChange={() => setShowPass(!showPass)}/>
        </Form.Group>

        <div className="d-flex justify-content-between mt-4">
          <Button variant="secondary" onClick={() => navigate(-1)}>Kembali</Button>
          <Button type="submit" variant="primary">Masuk</Button>
        </div>
      </Form>
       <ToastContainer position="top-right" autoClose={3000} />
    </Container>
    </div>
  );
};

export default Login;
