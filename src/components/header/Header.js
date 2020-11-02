import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/index.css';
import logo from '../../css/images/logo.png'
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

const Header = () => {

    const listData=[
        {
            text1: 'teste1'
        }
    ]

    const itemData = () => {
        return(
            <span>
                {listData.text1}
            </span>
        )
    }

    return (
        <header id="header">
            <div>
                <img src={logo} />
                <DropDownListComponent id="dropDown" dataSource={listData} itemTemplate={itemData} width= "100px" popupHeight="200px" popupWidth="250px" placeholder="Meu Perfil" />
            </div>
        </header>
    )
}

export default Header;