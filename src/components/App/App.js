import React, { Component } from 'react'
import './App.scss'
import Header from '../Elements/Header/Header'
import Home from '../Home/Home'
import Footer from '../Elements/Footer/Footer'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
                <Footer />
            </div>
        )
    }
}

export default App
