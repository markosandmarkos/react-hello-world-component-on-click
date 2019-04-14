import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HelloWorld from "./HelloWorld";
import {Button, Card, CardBody, CardSubtitle, CardTitle, Col, Row, Container} from "reactstrap";

class App extends Component {

    state = {
        countArr: []
    };

    handleClick = () => {
        this.setState(oldState => ({
            countArr: [...oldState.countArr, Date.now()]
        }));
    };

    render() {

        const {countArr} = this.state;

        return (
            <Container>
                <Row>
                    <Button
                        style={{margin: '10px auto'}}
                        onClick={this.handleClick}
                        color="secondary"
                        outline>
                        Add Hello World #{countArr.length + 1}
                    </Button>{' '}
                </Row>

                <Row>
                    {countArr.map((value, key) => {
                            return (
                                <Col xs="3" key={value}>
                                    <Card style={{margin: '10px'}}>
                                        <CardBody>
                                            <CardSubtitle>
                                                <b>#{key + 1}</b>
                                            </CardSubtitle>
                                            <CardTitle>
                                                <HelloWorld key={value}/>
                                            </CardTitle>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        }
                    )}
                </Row>
            </Container>
        );
    }
}

export default App;
