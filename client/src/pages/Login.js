import React, { useContext, useState } from 'react';
import { Card, Container, Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { AuthUser } from '../context/authContext';

const Login = () => {
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })
    const [errorMsg, setErrorMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [show, setShow] = useState(true)
    const { dispatch } = useContext(AuthUser)

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value)
        const { name, value } = e.target;
        setUserLogin({
            ...userLogin,
            [name]: value
        })
    }

    const LoginUserFun = (e) => {
        e.preventDefault()
        // axios call
        setIsLoading(true);
        axios.post('https://mern-auth-backend-962m.onrender.com/api/auth/login', userLogin)
            .then(res => {
                console.log(res)
                if (res.data.status === 'success') {
                    setIsLoading(false);
                    setUserLogin({
                        name: "",
                        email: "",
                        password: ""
                    })
                    localStorage.setItem('user', JSON.stringify(res.data));
                    localStorage.setItem('auth_token', res.data.token);
                    dispatch({
                        type: 'LOGIN',
                        payload: res.data
                    })
                }
            }).catch(err => {
                setIsLoading(false);
                console.log(err)
                setErrorMsg(err.response.data.message)
                setTimeout(() => {
                    setErrorMsg('');
                }, 3000);
            })
    }
    return (
        <Container>
            <Form className='login-form pt-5'>
                <Card>
                    <Card.Body>
                        <h4 className='mb-4' style={{ color: '#6d6d6d' }}>Login to your account</h4>
                        {errorMsg && <Alert variant="success" onClose={() => setShow(false)} dismissible>
                            {errorMsg}
                        </Alert>}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email :-</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" value={userLogin.email} onChange={handleChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password :-</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" value={userLogin.password} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button disabled={isLoading} variant="primary" type="submit" onClick={LoginUserFun}>
                            Login
                        </Button>
                    </Card.Body>
                </Card>
            </Form>
        </Container>
    );
}

export default Login;