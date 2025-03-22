import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import './Form.css';

const FormCourse = () => {
    return (
        <Container className="form-container">
            <h2 className="form-title">Form</h2>
            <Form>
                <Form.Group className="form-group">
                    <Form.Label className="form-label">Nama</Form.Label>
                    <Form.Control type="text" placeholder="masukan nama" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label className="form-label">Mata Pelajaran</Form.Label>
                    <Form.Select>
                        <option>pilih deh</option>
                        <option value="matematika">Matematika</option>
                        <option value="ipa">IPA</option>
                        <option value="inggris">Inggris</option>
                        <option value="tik">Tik</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label className="form-label">jenjang</Form.Label>
                    <Form.Select>
                        <option>pilih deh</option>
                        <option value="limasd">5-SD</option>
                        <option value="enamsd">6-SD</option>
                        <option value="satusmp">1-SMP</option>
                        <option value="duasmp">2-SMP</option>
                        <option value="tigasmp">3-SMP</option>
                    </Form.Select>
                </Form.Group>
            </Form>
            <Button variant="primary" type="submit">
          Daftar
        </Button>
        </Container>
    );
};

export default FormCourse;