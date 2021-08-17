import React from 'react'
import Header from '../components/header/Header'
import Main from '../components/main/Main'
import Footer from '../components/Footer'

export default class Home extends React.Component{
    render(){
        window.scrollTo(0, 0)
        return(
            <>
                <Header />
                <Main />
                <Footer />
            </>
        )
    }
}