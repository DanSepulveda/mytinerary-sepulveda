import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import Navbar from "../components/Navbar"
import usersActions from "../redux/actions/usersActions"

const Signup = (props) => {
    const [user, setUser] = useState({})

    // useEffect(() => {

    // }, [])

    const inputHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const signup = () => {
        props.createUser(user)
    }

    return (
        <>
            <Navbar />
            <main>
                <section className="signup-container">
                    <input type="text" name="firstName" placeholder="First Name" onChange={inputHandler} />
                    <input type="text" name="lastName" placeholder="Last Name" onChange={inputHandler} />
                    <input type="text" name="email" placeholder="Email" onChange={inputHandler} />
                    <input type="text" name="password" placeholder="Password" onChange={inputHandler} />
                    <input type="text" name="imageUrl" placeholder="Image URL" onChange={inputHandler} />
                    <input type="text" name="country" placeholder="Country" onChange={inputHandler} />
                    <button onClick={signup}>Sign Up</button>
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
    createUser: usersActions.createUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)