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
        if (Object.values(user).includes("") || Object.values(user).length != 6) {
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
                        <h1>Create Account</h1>
                        <h4>Please fill in the form to get access to all the features.</h4>
                        <form className="input-container">
                            <div className="row-container">
                                <div className="col-container">
                                    <label htmlFor="firstName">First Name</label>
                                    <input id="firstName" type="text" name="firstName" onChange={inputHandler} autoComplete="nope" />
                                </div>
                                <div className="col-container">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input id="lastName" type="text" name="lastName" onChange={inputHandler} autoComplete="nope" />
                                </div>
                            </div>
                            <div className="row-container">
                                <div className="col-container">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="email" name="email" onChange={inputHandler} autoComplete="nope" />
                                </div>
                                <div className="col-container">
                                    <label htmlFor="password">Password</label>
                                    <input id="password" type="password" name="password" onChange={inputHandler} autoComplete="nope" />
                                </div>
                            </div>
                            <div className="row-container">
                                <div className="col-container">
                                    <label htmlFor="imageUrl">Image Url</label>
                                    <input id="imageUrl" type="text" name="imageUrl" onChange={inputHandler} autoComplete="nope" />
                                </div>
                                <div className="col-container">
                                    <label htmlFor="country">Country</label>
                                    <select id="country" required name="country" onChange={inputHandler} >
                                        <option disabled >Choose your country</option>
                                        {countries.map(country => <option value={country.name} key={country.name}>{country.name}</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                        </form>
                        <button onClick={verification}>Sign Up</button>
                        <p>Do you have an account? <Link to='/login'>Log In</Link></p>
                    </div>

                    <div className="benefits-container">
                        <div className="description">
                            <div className="benefit-icon" style={{ backgroundImage: "url('/assets/like.png')" }}></div>
                            <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, temporibus?
                            </p>
                        </div>
                        <div className="description">
                            <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, temporibus?
                            </p>
                            <div className="benefit-icon" style={{ backgroundImage: "url('/assets/comment.png')" }}></div>
                        </div>
                        <div className="description">
                            <div className="benefit-icon" style={{ backgroundImage: "url('/assets/create.png')" }}></div>
                            <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, temporibus?
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        user: state.users.user,
        token: state.users.token
    }
}

const mapDispatchToProps = {
    createUser: usersActions.createUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)