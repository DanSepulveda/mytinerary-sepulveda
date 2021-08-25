import "../styles/signup.css"
import axios from "axios"
import React, { useState, useEffect } from "react"
import { message } from "../components/Message"
import { connect } from "react-redux"
import Navbar from "../components/Navbar"
import usersActions from "../redux/actions/usersActions"
import { Link } from "react-router-dom"

const Signup = (props) => {
    const [user, setUser] = useState({})
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/all?fields=name")
            .then(response => setCountries(response.data))
    }, [])

    const inputHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const verification = () => {
        console.log('holaaaaa')
        if (Object.values(user).includes("") || Object.values(user).includes(null)) {
            message('error', 'All fields are required')
        } else {
            async function userVerification() {
                try {
                    await props.createUser(user)
                    message('success', 'Acount created successfully')
                } catch (e) {
                    message('warning', e.message)
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
                        <h1>Create a new Account</h1>
                        <div className="input-container">
                            <input type="text" name="firstName" placeholder="First Name" onChange={inputHandler} />
                            <input type="text" name="lastName" placeholder="Last Name" onChange={inputHandler} />
                            <input type="email" name="email" placeholder="Email" onChange={inputHandler} />
                            <input type="text" name="password" placeholder="Password" onChange={inputHandler} />
                            <input type="text" name="imageUrl" placeholder="Image URL" onChange={inputHandler} />
                            <select name="country" onChange={inputHandler} >
                                <option disabled >Choose your country</option>
                                {countries.map(country => <option name="country" value={country.name} key={country.name}>{country.name}</option>
                                )}
                            </select>
                            <button onClick={verification}>Sign Up</button>
                            <h4>Do you have an account? <Link to='/login'>Log In</Link></h4>
                        </div>
                    </div>
                    <div className="benefits-container">

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
    createUser: usersActions.createUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)