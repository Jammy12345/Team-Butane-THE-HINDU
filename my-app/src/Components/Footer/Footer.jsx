import React from "react";
import styles from "../../Styles/Footer.module.css";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaFacebookMessenger,
    FaMobileAlt,
    FaSistrix,
} from "react-icons/fa";
import { FooterBottom } from "./FooterBottom";
import { Trendings } from "./Trendings";

const Footer = () => {
    return (
        <>
            <div className={styles.footer_links}>
                <div>
                    <ul>
                        <li>
                            <FaFacebookF />
                        </li>
                        <li>
                            <FaTwitter />
                        </li>
                        <li>
                            <FaLinkedinIn />
                        </li>
                        <li>
                            <FaInstagram />
                        </li>
                        <li>
                            <FaFacebookMessenger />
                        </li>
                        <li>
                            <FaMobileAlt />
                        </li>
                    </ul>
                </div>
                <div>
                    <img
                        src="https://th.thgim.com/static/theme/default/base/img/logo.png"
                        alt="logo"
                    />
                </div>
                <div>
                    <input type="text" placeholder="search here" />
                    <button>
                        <FaSistrix color="black" />
                    </button>
                </div>
            </div>
            <Trendings />
            <FooterBottom />
        </>
    );
};

export { Footer };
