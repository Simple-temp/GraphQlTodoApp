import { useQuery } from '@apollo/client';
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { GET_MY_PROFILE } from '../gqloperation/queries';

const Posts = () => {

    const { loading, error, data } = useQuery(GET_MY_PROFILE)

    return (
        <>
            {loading ? <h4>Loading...</h4>
                : error ? console.log(error)
                    :
                    data.myprofile.posts.map(userPost => {
                        return (
                            <Col md={6} lg={4} className="my-2" key={Math.random().toString(36)}>
                                <Card>
                                    <Card.Body>
                                        <h6> Name : {userPost.post}</h6>
                                        <Button variant="outline-danger">
                                            <i className="fa-solid fa-trash-can"></i>
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
            }
        </>
    );
};

export default Posts;