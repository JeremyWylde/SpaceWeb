import React from 'react';
import '../App.css';
import News from "./News/News";
import NavBar from "./navBar/NavBar";

function Content() {
    return (
        <div className={"content"}>
            <NavBar/>
            <News/>
        </div>
    );
}

export default Content;
