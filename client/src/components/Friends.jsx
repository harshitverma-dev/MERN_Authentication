import React from 'react'
import { Card, Col, Row, ListGroup } from 'react-bootstrap';

const Friends = ({ friends }) => {
    // console.log(Friends)
    return (
        <Col>
            <Card className='mt-4 text-start'>
                <ListGroup variant="flush">
                    <ListGroup.Item><strong>Id :- </strong>{friends._id}</ListGroup.Item>
                    <ListGroup.Item><strong>FirstName :- </strong> {friends.firstName}</ListGroup.Item>
                    <ListGroup.Item><strong>LastName :- </strong> {friends.lastName}</ListGroup.Item>
                    <ListGroup.Item><strong>Email :- </strong> {friends.friendEmail}</ListGroup.Item>
                    <ListGroup.Item><strong>Role :- </strong> {friends.jobRole}</ListGroup.Item>
                    <ListGroup.Item><strong>Location :- </strong> {friends.location}</ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    )
}

export default Friends
