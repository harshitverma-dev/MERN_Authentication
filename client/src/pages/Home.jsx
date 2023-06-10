import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Friends from '../components/Friends';
import { Col, Container, Row } from 'react-bootstrap';
import FriendsForm from '../components/FriendsForm';

const Home = () => {
    const [friends, setFriends] = useState();
    useEffect(() => {
        axios.get('http://localhost:1000/api/friends')
            .then((res) => {
                if (res.status === 200) {
                    setFriends(res.data.allFriends);
                }
            }).catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <Container>
            <Row className='flex-column-reverse flex-lg-row'>
                <Col lg={8}>
                    <Row xs={1} md={2}>
                        {
                            friends?.map((friends) => {
                                return <Friends key={friends._id} friends={friends} />
                            })
                        }
                    </Row>
                </Col>
                <Col lg={4}>
                    <FriendsForm />
                </Col>
            </Row>
        </Container>
    )
}

export default Home
