import "../styles/signup.css"
import axios from "axios"
import React, { useState, useEffect, useRef } from "react"
import { message } from "../components/Message"
import { connect } from "react-redux"
import Navbar from "../components/Navbar"
import usersActions from "../redux/actions/usersActions"
import { Link } from "react-router-dom"

const Signup = (props) => {
    const [user, setUser] = useState({})
    const [countries, setCountries] = useState([])
    const [errors, setErrors] = useState([])


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
                    let response = await props.createUser(user)
                    if (response.data.response) {
                        message('success', 'Acount created successfully')
                    } else {
                        let errorsArr = response.data.errors
                        let errorsObj = {}
                        // console.log(errorsArr)
                        for (const error in errorsArr) {
                            console.log(error)
                            errorsObj[error.path[0]] = error.message;
                        }
                        console.log('hola')
                        console.log(errorsObj)
                        // setErrors(response.data.errors)
                        // let errors = response.data.errors
                        // console.log(errors)
                    }
                } catch (e) {
                    message('warning', e.message)
                }
            }
            userVerification()
        }
    }

    const capitalize = (e) => {
        e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1).toLowerCase()
    }
    console.log(errors)

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
                                    <input id="firstName" type="text" name="firstName" onChange={inputHandler} onBlur={capitalize} autoComplete="nope" />
                                    {/* {errors[0] && <span className="input-error">{`🔥${errors[0].message}`}</span>} */}
                                </div>
                                <div className="col-container">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input id="lastName" type="text" name="lastName" onChange={inputHandler} onBlur={capitalize} autoComplete="nope" />
                                    {/* {errors[1] && <span className="input-error">{`🔥${errors[1].message}`}</span>} */}
                                </div>
                            </div>
                            <div className="row-container">
                                <div className="col-container">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="email" name="email" onChange={inputHandler} onBlur={(e) => {
                                        e.target.value = e.target.value.toLowerCase()
                                    }} autoComplete="nope" />
                                    {/* {errors[2] && <span className="input-error">{`🔥${errors[2].message}`}</span>} */}
                                </div>
                                <div className="col-container">
                                    <label htmlFor="password">Password</label>
                                    <input id="password" type="password" name="password" onChange={inputHandler} autoComplete="nope" />
                                    {/* {errors[3] && <span className="input-error">{`🔥${errors[3].message}`}</span>} */}
                                </div>
                            </div>
                            <div className="row-container">
                                <div className="col-container">
                                    <label htmlFor="imageUrl">Image Url</label>
                                    <input id="imageUrl" type="text" name="imageUrl" onChange={inputHandler} autoComplete="nope" />
                                    {/* {errors[4] && <span className="input-error">{`🔥${errors[4].message}`}</span>} */}
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