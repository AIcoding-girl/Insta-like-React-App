import { findByLabelText } from '@testing-library/react'
import React, { Component } from 'react'
import auth from '../auth'

// import { FlatLayout } from './components/Layouts/FlatLayout'

// function SignIn() {
//     return (
//         <div>
//             <h1>Photo Z</h1>

//             <button onClick={
//                 () => {
//                     auth.login(() => {
//                         this.props.history.push("./login")
//                     })
//                 }
//             }>
//                 Sign In
//                 </button>

//             <h3>Sign Up</h3>
//             <button onClick={
//                 () => {
//                     auth.login(() => {
//                     })
//                 }
//             }>Sign Up</button>
//         </div>
//     )
// }

// export default SignIn

class SignIn extends Component {

    constructor() {
        super()
        this.state = {
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
            width: "40%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "10% auto",
            paddingTop: "5%",
            paddingBottom: "5%"
        }

        return (
            <div style={boxContainer}>
                <form>
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

                    {/* <h1>{this.state.email} {this.state.password}</h1> */}
                </form>

                <br />

                <button onClick={
                    () => {
                        auth.login(() => {
                            this.props.history.push("./login")
                        })
                    }
                }>
                    Sign In
                </button>

                <br />

                <a href="#">Forgot password?</a>

                <br />
                <button onClick={
                    () => {
                        auth.login(() => {
                            this.props.history.push("./signup")
                        })
                    }
                }>Sign Up</button>
            </div>
        )
    }
}

export default SignIn