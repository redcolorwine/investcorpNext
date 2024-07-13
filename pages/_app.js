import React, { useRef } from 'react';
import '../styles/globals.css'
import MainContainer from '../components/MainContainer/MainContainer';


function MyApp({ Component, pageProps }) {


  return (
   
      <MainContainer >
        <Component  />
      </MainContainer>

  )
}

export default MyApp
