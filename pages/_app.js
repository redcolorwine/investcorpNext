import React from 'react';
import '../styles/globals.css'
import MainContainer from '../components/MainContainer/MainContainer';


function MyApp({ Component }) {


  return (
   
      <MainContainer >
        <Component  />
      </MainContainer>

  )
}

export default MyApp
