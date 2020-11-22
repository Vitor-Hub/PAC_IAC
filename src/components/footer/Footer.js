import React from 'react';
import '../../css/index.css';

const Footer = () => {

    return (
        <footer id="footer">
            <img src="https://upload.wikimedia.org/wikipedia/pt/e/e2/Logo_uerj_cor.gif" alt="Logo UERJ" />
            <div className="info">
                <div>
                    <label>Projeto de Ambiente Computacional</label>
                    <label>Vitor Santos Pereira</label>
                </div>
                
            </div>
            <div className="info">
                <div>
                    <label>Professor:</label>
                    <label>Jorge Duarte Pires Valerio</label>
                </div>
            </div>
        </footer>
    )
}

export default Footer;