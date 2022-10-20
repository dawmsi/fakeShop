import axios from 'axios'
import React, { Component } from 'react'

class CheckoutPage extends Component {
    state = {
        name: '',
        address: '',
        isOrderSend: false,
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    handleAddress = (e) => {
        this.setState({
            address: e.target.value,
        })
    }

    handleSend = (e) => {
        e.preventDefault()
        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: this.state.name,
                    address: this.state.address,
                }
            )
            .then((res) => res.data)
            .then(({ name, address }) =>
                this.setState({
                    name,
                    address,
                    isOrderSend: true,
                })
            )
    }

    renderForm = () => {
        return (
            <form onSubmit={this.handleSend}>
                <div>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={this.state.name}
                        onChange={this.handleName}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Your address"
                        value={this.state.address}
                        onChange={this.handleAddress}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        )
    }

    renderMessage = () => {
        return (
            <div>
                Dear
                {this.state.name}, thanks for your order!
                <p>Address: {this.state.address}</p>
            </div>
        )
    }

    render() {
        console.log(this.state)
        return (
            <>
                <h1>Check out</h1>
                {this.state.isOrderSend !== true
                    ? this.renderForm()
                    : this.renderMessage()}
            </>
        )
    }
}

export default CheckoutPage
