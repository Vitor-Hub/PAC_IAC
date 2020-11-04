import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/index.css';
import logo from '../../css/images/logo.png'

const Header = () => {

    const [dropDown, setDropDown] = React.useState(false);

    const showDrop = () => {
        if(dropDown){
            setDropDown(false);
        } else {
            setDropDown(true);
        }
    }

    return (
        <header id="header">
            <div id="divHeader">
                <img src={logo} />
                <div id="dropDown">
                    <label onClick={showDrop}>Dropdown</label>
                    {dropDown &&
                        <div id="dropDownContent">
                            <label>teste1</label>
                            <label>teste2</label>
                            <label>teste3</label>
                        </div>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;