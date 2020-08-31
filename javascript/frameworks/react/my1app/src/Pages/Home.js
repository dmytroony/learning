import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import Carousel from 'react-bootstrap/esm/Carousel';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';


export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />

                <Container>
                    <h2 className="text-center m-4">Our team</h2>
                    <CardDeck className="m-4">
                        <Card bg="info">
                            <Card.Img 
                            variant="top" 
                            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Ad sit ipsum labore amet qui est ipsum.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>

                        <Card border="info" text="info">
                            <Card.Body>
                                <Card.Title>Visioners</Card.Title>
                                <Card.Text>
                                    Ad sit ipsum labore amet qui est ipsum.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                            <Card.Img 
                            variant="bottom" 
                            src="https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                            />
                        </Card>

                        <Card bg="info">
                            <Card.Img 
                            variant="top" 
                            src="https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                            />
                            <Card.Body>
                                <Card.Title>Managers</Card.Title>
                                <Card.Text>
                                    Ad sit ipsum labore amet qui est ipsum.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        )
    }
}
