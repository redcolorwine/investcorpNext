import React, { useRef } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import '../../styles/Home.module.css'

const MainContainer = ({ mainRef,
    aboutRef,
    teamRef,
    accordeonRef,
    servicesRef,
    contactsRef,
    searchRef, children }) => {

    return (
        <div className="App">
            <Header menuRefs={[mainRef, aboutRef, teamRef, servicesRef, searchRef, accordeonRef, contactsRef]}/>
            <div className="Center">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainContainer