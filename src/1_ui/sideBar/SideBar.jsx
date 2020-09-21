import React from "react";
import sideBarLogo from "../../assets/sideBarLogo.svg";
import SidebarItem from "./SideBarItem";
import accountLogo from "../../assets/account.svg"
import vps from "../../assets/VPS.svg"
import domens from "../../assets/domens.svg"
import bort from "../../assets/bortovoyZhurnal.svg"
import styles from "./Sidebar.module.css"


const SideBar = () => {

    return (
        <>
            <div className={styles.sidebarWrapper}>
                <img className={styles.logo} src={sideBarLogo}/>
                <SidebarItem logo={accountLogo} title={"Аккаунт"}/>
                <SidebarItem logo={vps} title={"VPS"}/>
                <SidebarItem logo={domens} title={"Домены"}/>
                <SidebarItem isActive={true} logo={bort} title={"Бортовой журнал"}/>
            </div>
        </>
    )
};

export default SideBar;
