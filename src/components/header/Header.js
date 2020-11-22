import React from 'react';
import '../../css/index.css';
import logo from '../../css/images/logo.png'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

const Header = () => {

    const data = {
        "titles":[
            {"Name": "teste1"}
        ]
    }

    const fields = { text: "Name" };

    const templateItem = () => {
        return(
            <span>
                <span>{data.Name}</span>
            </span>
        );
    }

    return (
        <header id="header">
            <div id="divHeader">
                <div className="logo">
                    <img src={logo} alt=""/>
                    <label>PAC</label>
                </div>
                <div id="dropDown">
                    <DropDownListComponent 
                        id="dropDownList"
                        itemTemplate={templateItem}
                        placeholder="Meu Perfil"
                        dataSource={data}
                        fields={fields}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;