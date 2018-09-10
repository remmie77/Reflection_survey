import React, { Component } from 'react';
import { connect } from 'react-redux';
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

        this.props.history.push('success');

        this.clearFields();
    }

    clearFields() {
        this.setState(FormObject);
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    <h4>
                        PLEASE LEAVE SOME FEEDBACK.<br />
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
                            <button type="submit">Next</button>
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