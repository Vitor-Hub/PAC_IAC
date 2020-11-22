import React from 'react';
import '../css/index.css';

import Header from '../components/header/Header';
import Body from '../components/body/Body';

const Main = () => {
    return(
        <div id="mainPage">
            <Header/>
            <Body/>
        </div>
    )
}

export default Main;