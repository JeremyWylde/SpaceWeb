import React from "react";
import styles from "./SideBarItem.module.css"

const SidebarItem = (props) => {

    return (
            <div className={props.isActive ? styles.sidebarItemWrapperActive :styles.sidebarItemWrapper}>
                <div className={props.isActive ? styles.someLine: ''}></div>
                <img src={props.logo}/>
                <p>{props.title}</p>
            </div>
    )
};

export default SidebarItem;
