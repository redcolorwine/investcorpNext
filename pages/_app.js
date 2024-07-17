import React from 'react';
import '../styles/globals.css'
import MainContainer from '../components/MainContainer/MainContainer';
import Head from 'next/head';


function MyApp({ Component }) {


  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <MainContainer >
        <Component />
      </MainContainer>
    </>
  )
}

export default MyApp
