import React, { useState } from 'react';
import { Container, Card, Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

const Signup = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [errorMsg, setErrorMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [registeredMsg, setRegisteredMsg] = useState('')
    const [show, setShow] = useState(true)

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value)
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const CreateUserFun = (e) => {
        e.preventDefault()
        setIsLoading(true);
        axios.post('http://localhost:1000/api/auth/signup', userData)
            .then(res => {
                console.log(res)
                if (res.data.message === 'success') {
                    setIsLoading(false);
                    setUserData({
                        name: "",
                        email: "",
                        password: ""
                    })
                    setRegisteredMsg('User successfully registered !');
                    setTimeout(() => {
                        setRegisteredMsg('');
                    }, 3000);
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
                        <h4 className='mb-4' style={{ color: '#6d6d6d' }}>Sign Up</h4>
                        {registeredMsg && <Alert variant="success" onClose={() => setShow(false)} dismissible>
                            {registeredMsg}
                        </Alert>}
                        {errorMsg && <Alert variant="success" onClose={() => setShow(false)} dismissible>
                            {errorMsg}
                        </Alert>}
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name :-</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Enter Name" value={userData.name} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email :-</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" value={userData.email} onChange={handleChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password :-</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" value={userData.password} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button disabled={isLoading} variant="primary" type="submit" onClick={CreateUserFun}>
                            Create Account
                        </Button>
                    </Card.Body>
                </Card>
            </Form>
        </Container>
    );
}

export default Signup;