import React from 'react';
import '../../css/index.css';

import perfil from '../../css/images/perfil.jpg'

const Body = () => {

    return (
        <div id="bodyComponent">
            <div className="capa" />

            <div className="perfil">
                <img src={perfil} alt="" />
            </div>

            <label>Vitor Santos Pereira</label>
            
            <div className="cards">
                <div class="grid-container">
                    <div class="grid-item">1</div>
                    <div class="grid-item">2</div>
                    <div class="grid-item">3</div>
                    <div class="grid-item">4</div>
                    <div class="grid-item">5</div>
                    <div class="grid-item">6</div>
                    <div class="grid-item">7</div>
                    <div class="grid-item">8</div>
                    <div class="grid-item">9</div>
                </div>
            </div>
        </div>
    );
}

export default Body;