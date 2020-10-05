import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
        const boxContainer = {
            width: "20%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            marginTop: "10%",
            paddingTop: "1%",
            paddingBottom: "1%"
        }
        return (
            <div style={boxContainer}>
                <form>
                    <h3> Sign In</h3>
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

                {/* <button onClick={
                    () => {
                        auth.login(() => {
                            this.props.history.push("./")
                        })
                    }
                }>
                    Sign In
                </button> */}

                <Link to="/" className="btn btn-primary">Sign In</Link>
            </div>
        )
    }
}

export default SignUp