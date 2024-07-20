import React from 'react'
import cmedia from './notfound.module.css';
import Image from 'next/image';
import Head from 'next/head';

const NotFound = () => {
    return (
        <>
            <Head>
                <title>Страница не найдена. 404.</title>
            </Head>
            <div className={cmedia.notFound}>
                <div className={cmedia.notFoundWrapper}>
                    <h1>ОШИБКА 404!</h1>
                    <h2>Страница не найдена..</h2>
                    <Image src={'/media/notfound.png'} width={500} height={400} alt="" srcSet="" />

                </div>
            </div>
        </>

    )
}

export default NotFound