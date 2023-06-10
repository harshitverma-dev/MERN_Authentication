import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Friends from '../components/Friends';
import { Col, Container, Row } from 'react-bootstrap';
import { FriendsContext } from '../context/context';
import FriendsForm from '../components/FriendsForm';

const Home = () => {
    // const [friends, setFriends] = useState();
    const { state, dispatch } = useContext(FriendsContext);
    // console.log(state)
    useEffect(() => {
        axios.get('http://localhost:1000/api/friends')
            .then((res) => {
                if (res.status === 200) {
                    dispatch({
                        type:'SET_FRIENDS',
                        payload: res.data.allFriends
                    })
                    // setFriends(res.data.allFriends);
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
                            state?.friends?.map((friends) => {
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
