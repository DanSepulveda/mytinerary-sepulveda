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
    const [errors, setErrors] = useState({})


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
                    console.log(response)
                    if (response.data.success) {
                        alert('lala')
                        message('success', 'Acount created successfully')
                    } else {
                        let errorsArr = response.data.errors
                        let errorsObj = {}
                        errorsArr.map((error) => {
                            errorsObj[error.path[0]] = error.message
                        })
                        setErrors(errorsObj)
                    }
                } catch (e) {
                    alert('entré acá')
                    message('warning', e.message)
                }
            }
            userVerification()
        }
    }

    const capitalize = (e) => {
        console.log(e)
        let value = e.target.value
        if (value != '') {
            value = value[0].toUpperCase() + value.slice(1).toLowerCase()
        }
    }

    const cleanSpace = (e) => {
        // if (e.which == 32) {
        //     console.log('si')
        //     return false
        // }
        if (e.keyCode === 32) {
            e.preventDefault()
        }
        // alert(e.which)
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
                                    <input id="firstName" type="text" name="firstName" onChange={inputHandler} onBlur={capitalize} onKeyDown={cleanSpace} autoComplete="nope" />
                                    {errors.firstName && <span className="input-error">{`⚠️${errors.firstName}`}</span>}
                                </div>
                                <div className="col-container">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input id="lastName" type="text" name="lastName" onChange={inputHandler} onBlur={capitalize} autoComplete="nope" />
                                    {errors.lastName && <span className="input-error">{`⚠️${errors.lastName}`}</span>}                                </div>
                            </div>
                            <div className="row-container">
                                <div className="col-container">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="email" name="email" onChange={inputHandler} onBlur={(e) => {
                                        e.target.value = e.target.value.toLowerCase()
                                    }} autoComplete="nope" />
                                    {errors.email && <span className="input-error">{`⚠️${errors.email}`}</span>}
                                </div>
                                <div className="col-container">
                                    <label htmlFor="password">Password</label>
                                    <input id="password" type="password" name="password" onChange={inputHandler} autoComplete="nope" />
                                    {errors.password && <span className="input-error">{`⚠️${errors.password}`}</span>}                                </div>
                            </div>
                            <div className="row-container">
                                <div className="col-container">
                                    <label htmlFor="imageUrl">Image Url</label>
                                    <input id="imageUrl" type="text" name="imageUrl" onChange={inputHandler} autoComplete="nope" />
                                    {errors.imageUrl && <span className="input-error">{`⚠️${errors.imageUrl}`}</span>}                                </div>
                                <div className="col-container">
                                    <label htmlFor="country">Country</label>
                                    <select id="country" required name="country" onChange={inputHandler} >
                                        <option>Choose your country</option>
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