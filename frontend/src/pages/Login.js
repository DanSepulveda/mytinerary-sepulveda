import "../styles/signup.css"
import React, { useState } from "react"
import { connect } from "react-redux"
import Navbar from "../components/Navbar"
import usersActions from "../redux/actions/usersActions"
import { message } from "../components/Message"
import { Link } from "react-router-dom"

const Signup = (props) => {
    const [user, setUser] = useState({ firstName: null })

    const inputHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const verification = () => {
        if (Object.values(user).includes("") || Object.values(user).includes(null)) {
            message('error', 'All fields are required')
        } else {
            props.createUser(user)
        }
    }

    return (
        <>
            <Navbar />
            <main>
                <section className="signup-container">
                    <h1>Welcome Back!</h1>
                    <h2>Please log in and enjoy all functionalities.</h2>
                    <form className="input-container">
                        <input required type="email" name="email" placeholder="Email" onChange={inputHandler} />
                        <input required type="text" name="password" placeholder="Password" onChange={inputHandler} />
                        <button>Log In</button>
                        <h4>Don't you have an account yet? <Link to='/signup'>Sign Up</Link></h4>
                    </form>
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