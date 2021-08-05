import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import React from 'react'

export default class Home extends React.Component{
    render(){
        return(
            <>
                <Header />
                <Main />
                <Footer />
            </>
        )
    }
}