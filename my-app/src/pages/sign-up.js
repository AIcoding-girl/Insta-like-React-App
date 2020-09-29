import React, { Component } from 'react'
import auth from '../auth'

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Username
                        <br />
                        <input
                            type="username"
                            value={this.state.username}
                            name="username"
                            onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Email
                        <br />
                        <input
                            type="email"
                            value={this.state.email}
                            name="email"
                            onChange={this.handleChange} />
                    </label>
                    <br />

                    <label>
                        Password
                        <br />
                        <input
                            type="password"
                            value={this.state.password}
                            name="password"
                            onChange={this.handleChange} />
                    </label>
                </form>

                <br />

                <button onClick={
                    () => {
                        auth.login(() => {
                            this.props.history.push("./signup")
                        })
                    }
                }>Sign Up</button>

                <br />

                <button onClick={
                    () => {
                        auth.login(() => {
                            this.props.history.push("./")
                        })
                    }
                }>
                    Sign In
                </button>
            </div>
        )
    }
}

export default SignUp