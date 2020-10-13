import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/main.scss";
import axios from "axios";
import auth from "../auth";
// import Login from "../components/Login";

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

// const api = axios.create({
//   baseURL: `http://localhost:3000/`,
//   headers: {
//     "X-auth-key": "token123",
//   },
// });

class SignIn extends Component {
  constructor() {
    super();

    // api.get("/").then((res) => {
    //   console.log(res.data);
    // });

    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // createUser = async () => {
  //   let res = await api.post("/login", {
  //     email: "email",
  //     password: "password",
  //   });
  //   console.log(res);
  //   this.setState({ email: res.data });
  // };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="boxContainer">
        <svg
          width="95"
          height="83"
          viewBox="0 0 95 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48.732 30.946C37.282 30.946 28 40.228 28 51.678C28 63.128 37.282 72.41 48.732 72.41C60.182 72.41 69.464 63.128 69.464 51.678C69.464 40.228 60.183 30.946 48.732 30.946ZM48.669 69.668C38.8 69.668 30.799 61.667 30.799 51.798C30.799 41.929 38.8 33.928 48.669 33.928C58.538 33.928 66.539 41.929 66.539 51.798C66.539 61.668 58.538 69.668 48.669 69.668Z"
            fill="black"
          />
          <path
            d="M49.332 43.239C48.804 43.239 48.285 43.277 47.779 43.35C52.497 44.627 56.005 49.408 56.005 55.114C56.005 57.026 55.61 58.833 54.909 60.44C57.615 58.757 59.398 55.886 59.398 52.626C59.398 47.442 54.891 43.239 49.332 43.239Z"
            fill="black"
          />
          <path
            d="M88.523 23.579H65.276C60.424 20.579 54.703 18.815 48.581 18.815C42.459 18.815 36.738 20.579 31.886 23.579H23V10.579H16.416L14.446 7.89501L15.824 1.08901L9.826 3.79801L4.069 0.402008L4.936 6.95301L0 11.383L6.534 12.585L8.801 18.65L9 17.471V23.579H7.652C4.326 23.579 3 26.621 3 29.947V72.816C3 76.142 4.326 78.578 7.652 78.578H33.589C38.055 79.578 43.161 82.353 48.581 82.353C54.001 82.353 59.106 79.578 63.573 78.578H88.523C91.849 78.578 95 76.142 95 72.816V29.947C95 26.621 91.849 23.579 88.523 23.579ZM14 12.769L17.812 11.579H20V21.579H14V12.769ZM9.055 12.159L8.324 10.026L6.137 9.60101L7.926 8.03801L7.649 5.72201L9.686 6.88801L11.8 5.88301L11.319 8.77601L12.455 10.579H9V11.451L9.055 12.159ZM7.652 74.579C7.185 74.579 8 73.284 8 72.817V29.947C8 29.48 7.185 28.578 7.652 28.578H25.554C20.178 34.578 16.877 42.662 16.877 51.084C16.877 60.005 20.582 67.578 26.532 74.578H7.652V74.579ZM48.581 78.06C33.634 78.06 21.473 65.899 21.473 50.952C21.473 36.005 33.633 23.844 48.581 23.844C63.528 23.844 75.689 36.005 75.689 50.952C75.689 65.899 63.528 78.06 48.581 78.06ZM89 72.817C89 73.284 88.99 74.579 88.523 74.579H70.63C76.58 67.579 80.285 60.005 80.285 51.085C80.285 42.663 76.983 34.579 71.608 28.579H88.524C88.991 28.579 89.001 29.48 89.001 29.948V72.817H89Z"
            fill="black"
          />
        </svg>

        <h3>PhotoZ</h3>

        <Form className="formContainer" onSubmit={this.createUser}>
          <FormGroup>
            <h3>Sign In</h3>
            <Label for="email-input">Email </Label>
            <Input
              type="email"
              id="email-input"
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="password-input">Password </Label>
            <Input
              type="password"
              id="password-input"
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
              required
            />

            <Button color="link" className="pl-0 mt-4" to="*">
              Forgot password
            </Button>

            <Button
              className="float-right mt-4"
              type="submit"
              color="primary"
              onClick={() => {
                auth.login(() => {
                  this.props.history.push("/api/v1/auth/session");
                });
              }}
            >
              Sign In
            </Button>
          </FormGroup>
        </Form>
        <Link className="mt-3" to="/signup">
          Sign up
        </Link>
      </div>
    );
  }
}

export default SignIn;

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
