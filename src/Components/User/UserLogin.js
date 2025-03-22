import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './user.css';

const UserLogin = () => {
    return (
        <Container className="form-container">
                    <h2 className="form-title">Login</h2>
                    <Form>
                        <Form.Group className="form-group">
                            <Form.Label className="form-label">Email</Form.Label>
                            <Form.Control type="email" placeholder="masukan email" />
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label className="form-label">Password</Form.Label>
                            <Form.Control type="text" placeholder="masukan password" />
                        </Form.Group>
                    </Form>
                    <div className='forgot-password'>dont have an account?  
                                    <Link to='/register'>click here</Link>
                                    </div>
                    <Button className="button" variant="primary" type="submit">
                  Daftar
                </Button>
                </Container>
    )
}

export default UserLogin;