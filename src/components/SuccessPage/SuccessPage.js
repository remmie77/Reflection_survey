import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

class SuccessPage extends Component {

    handleReroute = (event) => {
        console.log('yaaas maaaate');
        this.props.history.push('/');
    }
    
    render() {
        return (
            <div>
                <Header />
                <h1>THANK YOU!</h1><lb /><lb /><lb /><lb /><lb /><lb />
                <button onClick={this.handleReroute}>LEAVE NEW FEEDBACK</button>
            </div>

        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(SuccessPage);