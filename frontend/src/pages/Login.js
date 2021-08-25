import "../styles/login.css"
import React, { useState } from "react"
import { connect } from "react-redux"
import Navbar from "../components/Navbar"
import usersActions from "../redux/actions/usersActions"
import { message } from "../components/Message"
import { Link } from "react-router-dom"

const Signup = (props) => {
    const [user, setUser] = useState({})

    const inputHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const verification = () => {
        if (Object.values(user).includes("") || Object.values(user).length != 2) {
            message('error', 'All fields are required')
        } else {
            async function userVerification() {
                try {
                    await props.verifyAccess(user)
                    message('success', 'Logged In Successfully')
                } catch (e) {
                    message('error', e.message)
                }
            }
            userVerification()
        }
    }

    return (
        <>
            <Navbar />
            <main>
                <section className="signup-container">
                    <div className="form-container">
                        <h1>Welcome Back!</h1>
                        <h3>We're glad you are here again! Let's enjoy!</h3>
                        <form className="input-container">
                            <input required type="email" name="email" placeholder="Email" onChange={inputHandler} />
                            <input required type="password" name="password" placeholder="Password" onChange={inputHandler} />
                        </form>
                        <button onClick={verification}>Log In</button>
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