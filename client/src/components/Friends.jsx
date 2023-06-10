import React, { useState } from 'react'
import { Card, Col, Row, ListGroup, Modal, Button, Alert  } from 'react-bootstrap';

const Friends = ({ friends }) => {
    // console.log(friends._id)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const friendDeleteFun = () => {
        // axios.post()
        console.log(friends._id)
    }
    return (
        <>
            <Col>
                <Card className='mt-4 text-start'>
                    <ListGroup variant="flush">
                        <ListGroup.Item className='d-flex justify-content-between'>
                            <span><strong>Id :- </strong>{friends._id}</span>
                            <span className='delete-friend danger-color' onClick={handleShow}>Delete</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>FirstName :- </strong> {friends.firstName}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>LastName :- </strong> {friends.lastName}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Email :- </strong> {friends.friendEmail}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Role :- </strong> {friends.jobRole}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Location :- </strong> {friends.location}
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Alert variant={'danger'}>
                    Do you want to delete your friend ? 
                    if yes then click on the yes button otherwise click on close button.
                    </Alert>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={friendDeleteFun}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Friends
