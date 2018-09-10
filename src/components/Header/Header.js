import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';


class Header extends Component {

    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">Feedback!</h1>
                <h4><i>Don't forget it!</i></h4>
            </header>
        );
    }

}




const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Header);













