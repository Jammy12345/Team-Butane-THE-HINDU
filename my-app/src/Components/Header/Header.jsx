import React, { useState } from "react";
import { HeaderSocial } from "./HeaderSocial";
import styles from "../../Styles/Header.module.css";
import { HeaderNews } from "./HeaderNews";
import { Modal } from "./Modal";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
    const [pop, setPop] = useState("none");
    const date = new Date().toDateString();
    const history = useHistory();

    // opens up pop up navbar when user clicks on it
    const handlePop = () => {
        if(pop === "none"){
            setPop("block")
        } else{
            setPop("none")
        }
    }

    // redirect to home page on click of home button
    const handleRedirect = () => {
        history.push('/')
    }

    return (
        <>
        <div className={styles.main}>
            {/* Social media and search input component */}
            <HeaderSocial />
            <img
                src="https://th.thgim.com/static/theme/default/base/img/logo.png"
                    alt="logo"
                    onClick={handleRedirect}
                    style={{cursor: "pointer"}}
            />
            <div>
                <span>
                    <Link to="">LATEST NEWS</Link>
                </span>
                <span>{date}</span>
                <span>
                    <Link to="">E-PAPER</Link>
                </span>
            </div>
        </div>
        {/* main navbar component */}
        <HeaderNews handlePop = {handlePop}/>
            <Modal handlePop = {handlePop} display = {pop}/>
        </>
    );
};

export { Header };
