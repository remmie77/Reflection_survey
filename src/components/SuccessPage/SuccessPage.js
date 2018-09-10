import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

class SuccessPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <p>YES1</p>
            </div>

        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(SuccessPage);