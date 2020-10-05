
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom'
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
                <Form >
                    <FormGroup>
                        <h3> Sign In</h3>
                        <Label for="email-input">Email </Label>
                        <br />
                        <Input
                            type="email"
                            id="email-input"
                            value={this.state.email}
                            name="email"
                            onChange={this.handleChange} />
                        <br />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password-input">Password </Label>
                        <br />
                        <Input
                            type="password"
                            id="password-input"
                            value={this.state.password}
                            name="password"
                            onChange={this.handleChange} />
                        <br />
                    </FormGroup>
                    {/* <h1>{this.state.email} {this.state.password}</h1> */}
                </Form>

                <Button onClick={
                    () => {
                        auth.login(() => {
                            this.props.history.push("./login")
                        })
                    }
                }>
                    Sign In
                </Button>

                <a href="#">Forgot password?</a>

                {/* <Button onClick={
                    () => {
                        auth.login(() => {
                            this.props.history.push("./signup")
                        })
                    }
                }>Sign Up</Button> */}

                <Link to="/signup" className="btn btn-primary">Sign up</Link>

                {/* <Redirect to="/signup" className="btn btn-primary"/>Sign up */}
            </div>
        )
    }
}

export default SignIn

// class SignIn extends Component {
//     constructor(props) {
//         super();
//         this.state = {
//             email: "",
//             password: ""
//         };
//     }

//     render() {
//         const { email, password } = this.state;
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label htmlFor="email">Email</label>
//                 <Input
//                     name="email"
//                     type="text"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={this.handleChange}
//                 />
//                 <label htmlFor="email">Password</label>
//                 <input
//                     name="password"
//                     type="password"
//                     placeholder="Enter your password"
//                     value={password}
//                     onChange={this.handleChange}
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         );
//     }

//     handleChange = event => {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     };

//     handleSubmit = event => {
//         console.log("Submitting");
//         console.log(this.state);
//     };
// }

// export default SignIn