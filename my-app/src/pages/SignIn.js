import React from 'react'
import auth from '../auth'

function SignIn(props) => {
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={
                () => {
                    auth.login(() => {
                        this.props.history.push("./login")
                    })
                }
            }>
                Sign In
        </button>

        <h1>Sign Up</h1>
        <button onClick={
                () => {
                    auth.login(() => {
                        this.props.history.push("./login")
                    })
                }
            }>
                Sign Up
        </button>
        </div>
    )
}

export default SignIn

