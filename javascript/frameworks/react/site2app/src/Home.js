import React from 'react';
import Slider from './Components/Slider';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ocean from '../src/ocean.jpg';
import Jumbotron from '../src/Components/Jumbotron';

export const Home = () => (
	<>
		<Slider/>
		<Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
			<Row>
				<Col>
					<Card style={{width: '18rem'}}>
						<Card.Img
							variant={"top"}
							src={ocean}
						/>
						<Card.Body>
							<Card.Title>WebDev Blog</Card.Title>
							<Card.Text>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</Card.Text>
							<Button variant="primary">Learn More</Button>
						</Card.Body>
					</Card>
				</Col>

				<Col>
					<Card style={{width: '18rem'}}>
						<Card.Img
							variant={"top"}
							src={ocean}
						/>
						<Card.Body>
							<Card.Title>MobDev Blog</Card.Title>
							<Card.Text>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</Card.Text>
							<Button variant="primary">Learn More</Button>
						</Card.Body>
					</Card>
				</Col>

				<Col>
					<Card style={{width: '18rem'}}>
						<Card.Img
							variant={"top"}
							src={ocean}
						/>
						<Card.Body>
							<Card.Title>Manager Blog</Card.Title>
							<Card.Text>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</Card.Text>
							<Button variant="primary">Learn More</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
		<Jumbotron />
		<Container style={{marginBottom: '30px'}}>
			<Row>
				<Col md={7}>
					<img
						src={ocean}
						alt="Ocean relax"
						width={'100%'}
					/>
				</Col>
				<Col md={5}>
					<h2>WebDev Blog</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Atque, blanditiis dolor,
						doloremque ducimus eveniet facilis maiores nisi provident quibusdam
						quo repellendus velit. A aperiam culpa delectus dolor dolores et fugit,
						obcaecati placeat possimus praesentium quam tempore unde ut! In, iusto?
					</p>
				</Col>
			</Row>
		</Container>
	</>
);
