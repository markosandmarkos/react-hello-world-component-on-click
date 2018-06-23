import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "reactstrap";

function randColor() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: randColor(),
        };
    }

    handleClick = () => {
        this.setState({
            color: randColor()
        })
    };

    render() {

        const {color} = this.state;

        return (
            <div>
                <p style={{color}}> Hello World!</p>
                <Button onClick={this.handleClick} size="sm" outline color="info">
                    Change color
                </Button>
            </div>
        );
    }
}

export default App;
