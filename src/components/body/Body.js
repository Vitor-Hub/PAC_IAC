import React from 'react';
import '../../css/index.css';

import capa from '../../css/images/come_come.png'

import perfil from '../../css/images/perfil.jpg'

import grid1 from '../../css/images/grid1.jpg'
import grid2 from '../../css/images/grid2.jpg'
import grid3 from '../../css/images/grid3.jpg'
import grid4 from '../../css/images/grid4.jpg'
import grid5 from '../../css/images/grid5.jpg'
import grid6 from '../../css/images/grid6.jpg'
import grid7 from '../../css/images/grid7.jpg'

const Body = () => {

    return (
        <div id="bodyComponent">
            <div className="capa">
                <img src={capa} alt="" />
            </div>

            <div className="perfil">
                <img src={perfil} alt="" />
            </div>

            <label>Vitor Santos Pereira</label>

            <div className="cards">
                <div className="grid-container">
                    <img className="grid-item" src={grid1} alt="" />
                    <img className="grid-item" src={grid2} alt="" />
                    <img className="grid-item" src={grid3} alt="" />
                    <img className="grid-item" src={grid4} alt="" />
                    <img className="grid-item" src={grid5} alt="" />
                    <img className="grid-item" src={grid6} alt="" />
                    <img className="grid-item" src={grid7} alt="" />
                    <img className="grid-item" src={perfil} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Body;