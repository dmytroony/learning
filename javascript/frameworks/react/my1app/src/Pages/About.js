import React, { Component } from 'react';
// import { Container } from 'react-bootstrap/lib/Tab';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        Design
                                    </Nav.Link>
                                    <Nav.Link eventKey="second">
                                        Team
                                    </Nav.Link>
                                    <Nav.Link eventKey="third">
                                        Programming
                                    </Nav.Link>
                                    <Nav.Link eventKey="fourth">
                                        Frameworks
                                    </Nav.Link>
                                    <Nav.Link eventKey="fifth">
                                        Libraries
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif" 
                                        width="100%"
                                    />
                                    <p>Eiusmod eu ad tempor commodo minim proident qui Lorem est amet consectetur qui esse. Pariatur et non esse magna dolor deserunt. Magna ea id officia aliqua esse sit id commodo deserunt sunt eu ex in sunt. Consectetur ex consequat officia occaecat.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://hireukrainiandevelopers.com/wp-content/uploads/2019/10/ebq6umm-min.jpg.webp" 
                                        width="100%"
                                    />
                                    <p>Eiusmod eu ad tempor commodo minim proident qui Lorem est amet consectetur qui esse. Pariatur et non esse magna dolor deserunt. Magna ea id officia aliqua esse sit id commodo deserunt sunt eu ex in sunt. Consectetur ex consequat officia occaecat.</p>
                                    <p>Eiusmod eu ad tempor commodo minim proident qui Lorem est amet consectetur qui esse. Pariatur et non esse magna dolor deserunt. Magna ea id officia aliqua esse sit id commodo deserunt sunt eu ex in sunt. Consectetur ex consequat officia occaecat.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://computertips.info/wp-content/uploads/2020/07/bRg0cgy.png" 
                                        width="100%"
                                    />
                                    <p>Eiusmod eu ad tempor commodo minim proident qui Lorem est amet consectetur qui esse. Pariatur et non esse magna dolor deserunt. Magna ea id officia aliqua esse sit id commodo deserunt sunt eu ex in sunt. Consectetur ex consequat officia occaecat.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://lh3.googleusercontent.com/proxy/qbpfUQy7GXoubgjU8ANiI5Hae_Llbr99g8LNILOcCXuB6wlLZnXrMQJUTRJRfdc9IKNkEVGEMtbk3KygeBIE4OMymFO9Xft7UdfwFKbWQ0shJZzmW8s" 
                                    width="100%" />
                                    <p>Eiusmod eu ad tempor commodo minim proident qui Lorem est amet consectetur qui esse. Pariatur et non esse magna dolor deserunt. Magna ea id officia aliqua esse sit id commodo deserunt sunt eu ex in sunt. Consectetur ex consequat officia occaecat.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://www.webdesignerdepot.com/cdn-origin/uploads/2019/07/featured_jquery.jpg" 
                                        width="100%"
                                    />
                                    <p>Eiusmod eu ad tempor commodo minim proident qui Lorem est amet consectetur qui esse. Pariatur et non esse magna dolor deserunt. Magna ea id officia aliqua esse sit id commodo deserunt sunt eu ex in sunt. Consectetur ex consequat officia occaecat.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
