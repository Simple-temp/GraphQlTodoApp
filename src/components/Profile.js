import { useQuery } from '@apollo/client';
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { GET_MY_PROFILE } from '../gqloperation/queries';
import Posts from './Posts';

const Profile = () => {

    const { loading, error, data } = useQuery(GET_MY_PROFILE)
    const navigate = useNavigate()
    if(!localStorage.getItem("token")){
        navigate("/")
    }
    console.log(data)

    return (
        <div className='container mt-5'>
            <Row>
                {
                    loading ? <h4>Loading...</h4>
                        : error ? console.log(error)
                            : <>
                                <Col md={4} className="mx-auto mt-5">
                                    <Card>
                                        <Card.Img variant="top" src={`https://robohash.org/${data.myprofile.name}.png`} className='img-fluid w-25 mx-auto' />
                                        <Card.Body>
                                            <Card.Title>Name: {data.myprofile.name}</Card.Title>
                                            <Card.Text>
                                                <strong>Gmail:</strong> {data.myprofile.email}
                                            </Card.Text>
                                            <Card.Text>
                                                <strong>Website:</strong> {data.myprofile.website}
                                            </Card.Text>
                                            <Button variant="outline-danger">
                                                <i className="fa-solid fa-trash-can"></i>
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={8}>
                                    <Row>
                                        <Posts/>
                                    </Row>
                                </Col>
                            </>
                }
            </Row>
        </div>
    );
};

export default Profile;

//key={Math.random().toString(36)}