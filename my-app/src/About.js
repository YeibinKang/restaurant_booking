import {Container, Card, Row, Col} from 'react-bootstrap'

function About(){

    return(
        <div>
            <br/>
            <Container fluid>
                
            </Container>   
            <Container>
                <Row>
                    <Col mg={6}>
                        
                        <Card bg="dark" text="white" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/4457125/pexels-photo-4457125.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" fluid={true}></Card.Img>
                        <Card.Title color="#185ADB"><p></p><h2>INSPIRED VANCOUVER</h2></Card.Title>
                        <Card.Text><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac tempor urna, a rhoncus libero. Donec aliquam feugiat tortor, eget.</p></Card.Text>
                        </Card>
                    </Col>
                    <Col mg={6}>
                        <Card bg="dark" text="white" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/2079589/pexels-photo-2079589.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" fluid={true}></Card.Img>
                            <Card.Title><p></p><h2>EVERYDAY FRESH SEAFOOD</h2></Card.Title>
                            <Card.Text><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac tempor urna, a rhoncus libero. Donec aliquam feugiat tortor, eget.</p></Card.Text>
                        </Card>
                    </Col>
                    <Col mg={6}>
                        <Card bg="dark" text="white" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/4877867/pexels-photo-4877867.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" fluid={true} />
                            <Card.Title><p></p><h2>ENJOY THE BEST MOMENT</h2></Card.Title>
                            <Card.Text><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac tempor urna, a rhoncus libero. Donec aliquam feugiat tortor, eget.</p></Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* map, contact */}


        </div>
    )

}

export default About;