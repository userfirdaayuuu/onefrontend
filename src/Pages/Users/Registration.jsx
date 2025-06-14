import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, Button, Container, Badge } from "react-bootstrap";
import Select from "react-select";
import useNotify from "../../Components/Common/Hooks/useNotify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Components/Style/Users.css";

const UserRegister = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [kursusOptions, setKursusOptions] = useState([]);
  const [showPass, setShowPass] = useState(false);
  const { notifySuccess, notifyError } = useNotify();

  useEffect(() => {
    const fetchKursus = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/kursus");
        const data = await res.json();

        const transformed = data.map((item) => ({
          value: item.id,
          label: item.namaKursus,
        }));
        setKursusOptions(transformed);
      } catch (error) {
        console.error("Gagal mengambil data kursus:", error);
        notifyError("Gagal mengambil data kursus");
      }
    };

    fetchKursus();
  }, []);

  const schema = yup.object().shape({
    nama: yup.string().required("Nama wajib diisi"),
    email: yup.string().email("Email tidak valid").required("Email wajib diisi"),
    password: yup.string().min(6, "Password minimal 6 karakter").required("Password wajib diisi"),
    noHp: role === "siswa" ? yup.string().required("No HP wajib diisi") : yup.string(),
    kelas: role === "siswa" ? yup.string().required("Kelas wajib diisi") : yup.string(),
    admin_token: role === "admin" ? yup.string().required("Token wajib diisi") : yup.string(),
    kursus: role !== "admin" ? yup.array().min(1, "Minimal 1 kursus dipilih") : yup.array(),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const payload = {
      name: data.nama,
      email: data.email,
      password: data.password,
      role: role,
    };

    if (role === "siswa") {
      payload.siswa = {
        no_hp: data.noHp,
        kelas: data.kelas,
        kursus: data.kursus.map((item) => item.value), 
      };
    } else if (role === "tutor") {
      payload.tutor = {
        kursus_ajar: data.kursus.map((item) => item.value),
      };
    } else if (role === "admin") {
      payload.admin_token = data.admin_token;
    }

    try {
      const res = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json();
        notifyError("Gagal daftar: " + (err.message || "terjadi kesalahan"));
        return;
      }
      notifySuccess("Pendaftaran berhasil!");
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
      notifyError("Terjadi kesalahan saat mendaftar.");
    }
  };

  return (
    <div className="user-page">
      <Container className="user-container">
         <ToastContainer position="top-center" autoClose={3000} />
        <h2 className="user-title">Daftar sebagai {role}</h2>
        <Form onSubmit={handleSubmit(onSubmit)} className="register-form">
          
          <Form.Group className="user-group">
            <Form.Label>Nama</Form.Label>
            <Form.Control type="text" {...register("nama")} isInvalid={!!errors.nama} />
            <Form.Control.Feedback type="invalid">{errors.nama?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="user-group">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" {...register("email")} isInvalid={!!errors.email} />
            <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="user-group">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type={showPass ? "text" : "password" }
            {...register("password")} 
            isInvalid={!!errors.password} 
            />
            <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
            <Form.Check
              type="checkbox"
              label="Tampilkan Password"
              className="mt-2"
              onChange={() => setShowPass(!showPass)}
              />
          </Form.Group>

          {role === "siswa" && (
            <>
              <Form.Group className="user-group">
                <Form.Label>No HP</Form.Label>
                <Form.Control type="text" {...register("noHp")} isInvalid={!!errors.noHp} />
                <Form.Control.Feedback type="invalid">{errors.noHp?.message}</Form.Control.Feedback>
              </Form.Group>
              
              <Form.Group className="user-group">
                <Form.Label>Kelas</Form.Label>
                <Form.Control type="text" {...register("kelas")} isInvalid={!!errors.kelas} />
                <Form.Control.Feedback type="invalid">{errors.kelas?.message}</Form.Control.Feedback>
              </Form.Group>
            </>
          )}

          {role === "admin" && (
            <Form.Group className="user-group">
              <Form.Label>Token</Form.Label>
              <Form.Control type="text" {...register("admin_token")} isInvalid={!!errors.admin_token} />
              <Form.Control.Feedback type="invalid">{errors.admin_token?.message}</Form.Control.Feedback>
            </Form.Group>
          )}

          {role !== "admin" && (
            <Form.Group className="user-group">
              <Form.Label>Pilih Kursus</Form.Label>
              <Controller
                name="kursus"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    isMulti
                    options={kursusOptions}
                    classNamePrefix="select"
                    className={errors.kursus ? "is-invalid" : ""}
                  />
                )}
              />
              <div className="mt-2">
                {control._formValues?.kursus?.map((k) => (
                  <Badge key={k.value} bg="info" className="me-1">
                    {k.label}
                  </Badge>
                ))}
              </div>
              {errors.kursus && (
                <div className="text-danger mt-1">{errors.kursus.message}</div>
              )}
            </Form.Group>
          )}

          <div className="forgot-password mt-3">
            Sudah punya akun? <Link to="/login">masuk</Link>
          </div>

          <div className="d-flex justify-content-between mt-4">
            <Button variant="secondary" onClick={() => navigate(-1)}>
              Kembali
            </Button>
            <Button type="submit" variant="primary">
              Daftar
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default UserRegister;