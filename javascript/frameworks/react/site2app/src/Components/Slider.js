import React from 'react';
import {Carousel} from 'react-bootstrap';
import ocean from '../ocean.jpg'

export default function Slider() {
	return (
		<Carousel>
			<Carousel.Item style={{'height': '600px'}}>
				<img
					className="d-block w-100"
					src={ocean}
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>Web Developer Blog</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia.</p>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item style={{'height': '600px'}}>
				<img
					className="d-block w-100"
					src={ocean}
					alt="Second slide"
				/>
				<Carousel.Caption>
					<h3>Mobile Developer Blog</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia.</p>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item style={{'height': '600px'}}>
				<img
					className="d-block w-100"
					src={ocean}
					alt="Third slide"
				/>
				<Carousel.Caption>
					<h3>Manager Blog</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}
