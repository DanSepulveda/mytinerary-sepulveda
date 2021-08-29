import styles from "../styles/signup.module.css"

import { message } from "../components/Message"
import Navbar from "../components/Navbar"

import axios from "axios"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import GoogleLogin from 'react-google-login';
import React, { useState, useEffect } from "react"
import usersActions from "../redux/actions/usersActions"

const Signup = (props) => {
    const [user, setUser] = useState({})
    const [countries, setCountries] = useState([])
    const [errors, setErrors] = useState({})

    //verificar si esto debe ser hecho a través de un action
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
        console.log('hola')
        let value = e.target.value
        console.log(value)
        if (value != '') {
            console.log('lala')
            value = value[0].toUpperCase() + value.slice(1).toLowerCase()
            console.log(value)
        }
    }

    const responseGoogle = async (response) => {
        let googleUser = {
            firstName: response.profileObj.givenName,
            lastName: response.profileObj.familyName,
            email: response.profileObj.email,
            password: response.profileObj.googleId,
            imageUrl: response.profileObj.imageUrl,
            country: "Google Land"
        }
        try {
            let response = await props.createUser(googleUser)
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
        console.log(googleUser)
    }

    return (
        <>
            <Navbar />
            <main>
                <section className={styles.signupContainer}>
                    <div className={styles.formContainer}>
                        <h1>Create Account</h1>
                        <h4>Please fill in the form to get access to all the features.</h4>
                        <form className={styles.inputContainer}>
                            <div className={styles.rowContainer}>
                                <div className={styles.colContainer}>
                                    <label htmlFor="firstName">First Name</label>
                                    <input id="firstName" type="text" name="firstName" onChange={inputHandler} onBlur={(e) => capitalize(e)} autoComplete="nope" />
                                    {errors.firstName && <span className={styles.inputError}>{`⚠️${errors.firstName}`}</span>}
                                </div>
                                <div className={styles.colContainer}>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input id="lastName" type="text" name="lastName" onChange={inputHandler} onBlur={capitalize} autoComplete="nope" />
                                    {errors.lastName && <span className={styles.inputError}>{`⚠️${errors.lastName}`}</span>}                                </div>
                            </div>
                            <div className={styles.rowContainer}>
                                <div className={styles.colContainer}>
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="email" name="email" onChange={inputHandler} onBlur={(e) => {
                                        e.target.value = e.target.value.toLowerCase()
                                    }} autoComplete="nope" />
                                    {errors.email && <span className={styles.inputError}>{`⚠️${errors.email}`}</span>}
                                </div>
                                <div className={styles.colContainer}>
                                    <label htmlFor="password">Password</label>
                                    <input id="password" type="password" name="password" onChange={inputHandler} autoComplete="nope" />
                                    {errors.password && <span className={styles.inputError}>{`⚠️${errors.password}`}</span>}                                </div>
                            </div>
                            <div className={styles.rowContainer}>
                                <div className={styles.colContainer}>
                                    <label htmlFor="imageUrl">Image Url</label>
                                    <input id="imageUrl" type="text" name="imageUrl" onChange={inputHandler} autoComplete="nope" />
                                    {errors.imageUrl && <span className={styles.inputError}>{`⚠️${errors.imageUrl}`}</span>}                                </div>
                                <div className={styles.colContainer}>
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
                        <GoogleLogin
                            clientId="108710933785-e7ee3h78c0ctglrth00nsm887l9jt6lk.apps.googleusercontent.com"
                            buttonText="Sign Up With Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />,
                    </div>

                    <div className={styles.benefitsContainer}>
                        <div className={styles.description}>
                            <div className={styles.benefitIcon} style={{ backgroundImage: "url('/assets/like.png')" }}></div>
                            <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, temporibus?
                            </p>
                        </div>
                        <div className={styles.description}>
                            <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, temporibus?
                            </p>
                            <div className={styles.benefitIcon} style={{ backgroundImage: "url('/assets/comment.png')" }}></div>
                        </div>
                        <div className={styles.description}>
                            <div className={styles.benefitIcon} style={{ backgroundImage: "url('/assets/create.png')" }}></div>
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