import React, { useContext, useState } from 'react'
import { Form, Button, Alert, Card } from 'react-bootstrap';
import axios from 'axios'
import { FriendsContext } from '../context/context';

const FriendsForm = () => {
    const { dispatch } = useContext(FriendsContext)
    const [friendsData, setFriendsData] = useState({
        firstName: "",
        lastName: "",
        friendEmail: "",
        jobRole: "",
        location: ""
    });
    const [fieldsError, setFieldsError] = useState('');
    const [show, setShow] = useState(true);
    const [userExistMsg, setUserExistMsg] = useState();
    const [friendSavedMsg, setFriendSavedMsg] = useState();
    const [savedFriendData, setSavedFriendData] = useState();

    const onChangeFun = (e) => {
        const { name, value } = e.target;
        setFriendsData({
            ...friendsData,
            [name]: value
        })
    }

    const submitFriendsData = (e) => {
        e.preventDefault()
        const { firstName, lastName, friendEmail, jobRole, location } = friendsData;
        if (!firstName || !lastName || !friendEmail || !jobRole || !location) {
            setFieldsError("all fields are required !")
            setTimeout(() => {
                setFieldsError('')
            }, 7000)
        }
        axios.post('http://localhost:1000/api/friends', friendsData)
            .then(res => {
                console.log(res)
                if (res.data.status === "success") {
                    setSavedFriendData(res.data.storeFriend);
                    dispatch({
                        type:'CREATE_FRIENDS',
                        payload: res.data.storeFriend
                    })
                    setFriendsData({
                        firstName: "",
                        lastName: "",
                        friendEmail: "",
                        jobRole: "",
                        location: ""
                    });
                    setFriendSavedMsg(res.data.message)
                    setTimeout(() => {
                        setFriendSavedMsg('')
                    }, 5000)
                }

            }).catch(err => {
                console.log(err)
                setUserExistMsg(err.response.data.message)
                setTimeout(() => {
                    setUserExistMsg('')
                }, 3000);
            })
    }
    return (
        <Card className='mt-4 form-container'>
            <Card.Header>Friend Details</Card.Header>
            <Card.Body>
                <Form>
                    {friendSavedMsg && <Alert variant="success" onClose={() => setShow(false)} dismissible>
                        {friendSavedMsg}
                    </Alert>}
                    {userExistMsg && <Alert variant="warning" onClose={() => setShow(false)} dismissible>
                        {userExistMsg}
                    </Alert>}
                    {fieldsError && <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        {fieldsError.charAt(0).toUpperCase() + fieldsError.slice(1)}
                    </Alert>}
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name='firstName'
                            placeholder="Enter first name"
                            onChange={onChangeFun} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name='lastName'
                            placeholder="Enter last name"
                            onChange={onChangeFun} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name='friendEmail'
                            placeholder="Enter email"
                            onChange={onChangeFun} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicJobRole">
                        <Form.Label>Role</Form.Label>
                        <Form.Control
                            type="text"
                            name='jobRole'
                            placeholder="Enter job role"
                            onChange={onChangeFun} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            type="text"
                            name='location'
                            placeholder="Enter location"
                            onChange={onChangeFun} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={submitFriendsData} disabled={friendsData.firstName && friendsData.lastName && friendsData.friendEmail && friendsData.jobRole && friendsData.location ? false : true}>
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>

    )
}

export default FriendsForm
