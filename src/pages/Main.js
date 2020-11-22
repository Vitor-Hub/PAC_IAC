import React from 'react';
import '../css/index.css';

import Header from '../components/header/Header';
import Body from '../components/body/Body';
import Footer from '../components/footer/Footer';

const Main = () => {
    return(
        <>
            <div id="mainPage">
                <Header/>
                <Body/>
            </div>
                <Footer/>
        </>
    )
}

export default Main;