import styles from "../styles/login.module.css"
import React, { useState } from "react"
import { connect } from "react-redux"
import Navbar from "../components/Navbar"
import usersActions from "../redux/actions/usersActions"
import { message } from "../components/Message"
import { Link } from "react-router-dom"
import GoogleLogin from 'react-google-login';


const Signup = (props) => {
    const [user, setUser] = useState({})

    const inputHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const verification = () => {
        if (Object.values(user).includes("") || Object.values(user).length !== 2) {
            message('error', 'All fields are required')
        } else {
            async function userVerification() {
                try {
                    await props.verifyAccess(user)
                    message('success', 'Logged In Successfully', 'top')
                } catch (e) {
                    message('error', e.message)
                }
            }
            userVerification()
        }
    }
    const responseGoogle = async (response) => {
        let googleUser = {
            email: response.profileObj.email,
            password: response.profileObj.googleId,
            flagGoogle: true,
        }
        try {
            await props.verifyAccess(googleUser)
            message('success', 'Logged In Successfully', 'top')
        } catch (e) {
            message('error', e.message)
        }
    }

    return (
        <>
            <Navbar />
            <main>
                <section className={styles.signupContainer}>
                    <div className={styles.formContainer}>
                        <h1>Welcome Back!</h1>
                        <h3>We're glad you are here again! Let's enjoy!</h3>
                        <form className={styles.inputContainer}>
                            <input required type="email" name="email" placeholder="Email" onChange={inputHandler} />
                            <input required type="password" name="password" placeholder="Password" onChange={inputHandler} />
                        </form>
                        <button onClick={verification} className={styles.loginButton}>Log In</button>
                        <span>or</span>
                        <GoogleLogin
                            clientId="108710933785-e7ee3h78c0ctglrth00nsm887l9jt6lk.apps.googleusercontent.com"
                            buttonText="Login with Google"
                            onSuccess={responseGoogle}
                            // onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />,
                        <p>Don't you have an account yet? <Link to='/signup'>Sign Up</Link></p>
                    </div>
                </section>
            </main>
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        newUser: state.users.newUser
    }
}

const mapDispatchToProps = {
    verifyAccess: usersActions.verifyAccess
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)