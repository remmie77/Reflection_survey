import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

const FormObject = {
    feeling: "",
};//end customerFormObject

class FeelingPage extends Component {
    constructor() {
        super();

        this.state = FormObject;
    }

    handleOptionChange = (event) => {
        console.log('in handleOptionChange');
        this.setState({
            ...this.state,
            feeling: event.target.value
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
        const action = { type: 'ADD_FEEL', payload: this.state }
        this.props.dispatch(action);

        // this.props.history.push('understand');

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
                        HOW ARE YOU FEELING<br />
                        TODAY?
                    </h4>
                    {/* <label>1-5:</label> */}
                </div>
                <form>
                    <div>
                        <div>
                            <div className="formSection">
                                <label htmlFor="#feelOneBtn">I'm feeling really bad.<br /> 1</label>
                                <input onChange={this.handleOptionChange} id="feelOneBtn" type="radio" value="1" name="feeling" checked={this.state.feeling === '1'} required /><br />
                                <label htmlFor="#feelTwoBtn">2</label>
                                <input onChange={this.handleOptionChange} id="feelTwoBtn" type="radio" value="2" name="feeling" checked={this.state.feeling === '2'} required /><br />
                                <label htmlFor="#feelThreeBtn">3</label>
                                <input onChange={this.handleOptionChange} id="feelThreeBtn" type="radio" value="3" name="feeling" checked={this.state.feeling === '3'} required /><br />
                                <label htmlFor="#feelFourBtn">4</label>
                                <input onChange={this.handleOptionChange} id="feelFourBtn" type="radio" value="4" name="feeling" checked={this.state.feeling === '4'} required /><br />
                                <label htmlFor="#feelFiveBtn">5</label>
                                <input onChange={this.handleOptionChange} id="feelFiveBtn" type="radio" value="5" name="feeling" checked={this.state.feeling === '5'} required /><br />
                                <span>I feel so amazing. </span>
                            </div>
                        </div>
                        <div>
                            <button type="submit">Next</button>
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
export default connect(mapReduxStateToProps)(FeelingPage);