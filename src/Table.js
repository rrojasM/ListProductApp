import React from 'react';
import { Text } from 'react-native';


class Table extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            isBig: false
        }
    }

    changeState = () => {
        this.setState({ isBig: !this.state.isBig })
    }
    render() {
        console.log('THIS IS A TABLE =>>', this.state.isBig);
        return (
            <Text style={{ fontSize: this.state.isBig ? 24 : 15 }} onPress={this.changeState}>this is a table</Text>
        )
    }
}

export default Table;