import React from 'react';
import '../../App.css';
import alert from "../../assets/alert.svg"


function NavBar() {
    return (
            <div className={"nav"}>
                <div className={"nav-wrap"}>
                    <div className={"nav-balance"}>100.00 ₽</div>
                    <div className={"nav-item"}>
                        <img className={"alert"} src={alert}/>
                        <div className={'numberOfAlert'}>1</div>Vikavishny
                    </div>
                    <div className={"nav-item"}>Выйти</div>
                </div>
            </div>
    );
}

export default NavBar;
