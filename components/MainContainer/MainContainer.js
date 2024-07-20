import React, { Suspense } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import '../../styles/Home.module.css'
import { Metrika } from '../metrika/metrika';


const MainContainer = ({ children }) => {

    return (
        <div className="App">
            <Header />

            <Suspense fallback={<></>}>
                <Metrika />
            </Suspense>
            <div className="Center">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainContainer