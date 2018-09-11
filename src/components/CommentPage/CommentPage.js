import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Header from '../Header/Header.js';

const FormObject = {
    feedback: {
        comment: '',
    }
};//end FormObject

class CommentPage extends Component {
    constructor() {
        super();

        this.state = FormObject;
    }



    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            customer: {
                ...this.state.comment,
                [event.target.name]: event.target.value,
            }
        });
    }

    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        const action = { type: 'ADD_UNDERSTAND', payload: this.state }
        this.props.dispatch(action);
        this.clearFields();
    }

    clearFields() {
        this.setState(FormObject);
    }

    handleSubToDb = (event) => {
        console.log();
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.reduxState.cart
        }).then((response) => {
                console.log('Back from POST: ', response.data);
                const action = {type: 'EMPTY_CART'}
                this.props.dispatch(action);
                // alert('Your survey has been submitted!');
                this.props.history.push('success');
            }).catch((error) => {
                console.log(error);
                alert('Unable to POST to db.')
            })
            
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    <h4>
                        PLEASE LEAVE ANY COMMENTS YOU'D LIKE.<br />
                        WOULD YOU LIKE TO SPEAK WITH<br />
                        SOMEONE? WOULD YOU LIKE TO SAY THANKS<br />
                        TO ANYONE IN PARTICULAR?
                    </h4>
                </div>
                <div className="customerFormContainer">
                    <form onSubmit={this.handleSubmit}>
                        <div className="formSection">
                            <label htmlFor="#commentInput">Comments:</label>
                            <input onChange={this.handleChange} placeholder="Awesome teacher!!!!!" id="commentInput" name="comment" required />
                        </div>
                        <div>
                            <button type="submit" onClick={this.handleSubmit}>Submit</button>
                        </div>
                        <div>
                            <button className="nextBtn" onClick={this.handleSubToDb}>Next</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(CommentPage);