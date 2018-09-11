import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

const FormObject = {
    feedback:{
    support: '',
    }
};//end FormObject

class SupportPage extends Component {
    constructor() {
        super();

        this.state = FormObject;
    }

    handleOptionChange = (event) => {
        console.log('in handleOptionChange');
        this.setState({
            ...this.state,
            support: event.target.value
        });

        console.log(this.state);
    }

    // handleChange = (event) => {
    //     console.log(event.target.value);
    //     this.setState({
    //         customer: {
    //             ...this.state.customer,
    //             [event.target.name]: event.target.value,
    //         }
    //     });
    // }

    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        const action = { type: 'ADD_SUPPORT', payload: this.state }
        this.props.dispatch(action);

        this.props.history.push('comment');

        // this.clearFields();
    }

    // clearFields(){
    //     this.setState(customerFormObject);
    // }

    render() {
        return (
            <div>
                <Header />
                <div>
                    <h4>
                        ON A SCALE OF 1-5,<br />
                        HOW WELL ARE YOU BEING<br />
                        SUPPORTED?
                    </h4>
                    {/* <label>1-5:</label> */}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <div className="formSection">
                                <label htmlFor="#feelOneBtn">I feel abandoned.<br /> 1</label>
                                <input onChange={this.handleOptionChange} id="feelOneBtn" type="radio" value="1" name="support" checked={this.state.support === '1'} required /><br />
                                <label htmlFor="#feelTwoBtn">2</label>
                                <input onChange={this.handleOptionChange} id="feelTwoBtn" type="radio" value="2" name="support" checked={this.state.support === '2'} required /><br />
                                <label htmlFor="#feelThreeBtn">3</label>
                                <input onChange={this.handleOptionChange} id="feelThreeBtn" type="radio" value="3" name="support" checked={this.state.support === '3'} required /><br />
                                <label htmlFor="#feelFourBtn">4</label>
                                <input onChange={this.handleOptionChange} id="feelFourBtn" type="radio" value="4" name="support" checked={this.state.support === '4'} required /><br />
                                <label htmlFor="#feelFiveBtn">5</label>
                                <input onChange={this.handleOptionChange} id="feelFiveBtn" type="radio" value="5" name="support" checked={this.state.support === '5'} required /><br />
                                <span>I am fully supported. </span>
                            </div>
                        </div>
                        <div>
                            <button type="submit" onClick={this.handleSubmit}>Next</button>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(SupportPage);