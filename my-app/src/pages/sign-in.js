import React from 'react'
import auth from '../auth'

// import { FlatLayout } from './components/Layouts/FlatLayout'

function SignIn() {
    return (
        <div>
            <h1>Photo Z</h1>
            <button onClick={
                () => {
                    auth.login(() => {
                        this.props.history.push("./login")
                    })
                }
            }>
                Sign In
        </button>

            <h3>Sign Up</h3>
            <button onClick={
                () => {
                    auth.login(() => {
                        this.props.history.push("./register")
                    })
                }
            }>Sign Up</button>
        </div>
    )
}

export default SignIn

