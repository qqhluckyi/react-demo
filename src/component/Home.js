import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            
        };
    }
  
    render() {
        var match = this.props.match
        return (
            <div>
                Home
               
            </div>
        );
    }
}

export default Home;