import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./2_bll/rootReducer"
import SideBar from "./1_ui/sideBar/SideBar";
import Content from "./1_ui/Content";
import Footer from "./1_ui/Footer";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <div className={"wrapper"}>
                    <SideBar/>
                    <Content/>
                </div>
                <Footer/>
            </div>
        </Provider>
    );
}

export default App;
