import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import '../../styles/Home.module.css'

const MainContainer = ({ children }) => {

    return (
        <div className="App">
            <Header />
            <div className="Center">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainContainer