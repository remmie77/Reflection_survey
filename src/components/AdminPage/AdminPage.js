import React, { Component } from 'react';
import Axios from 'axios';

class AdminPage extends Component {

    constructor() {
        super();

        this.state = {
            orders: [],
        }
    }


    getOrders() {
        console.log('in getOrders');

        Axios({
            method: 'GET',
            url: '/feedback'
        }).then((response) => {
            console.log('back from server with: ', response.data);
            this.setState({
                orders: response.data
            });
        }).catch((error) => {
            console.log('error: ', error);
            alert('there was an error getting the orders');
        })

        console.log(this.state.orders);
    }

    componentDidMount() {
        this.getOrders();
    };
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Understading</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Flagged</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.orders.map((order, i) => {
                            return (
                                <tr key={i}>
                                    <td>{order.feeling}</td>
                                    <td>{order.understanding}</td>
                                    <td>{order.support}</td>
                                    <td>{order.comments}</td>
                                    <td>{order.flagged}</td>
                                    <td>{order.date}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default AdminPage;