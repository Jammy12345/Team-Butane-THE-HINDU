import React from 'react'
import styles from "../../Styles/Header.module.css"
import { FaFacebookF, FaTwitter,FaLinkedinIn, FaInstagram, FaFacebookMessenger, FaMobileAlt, FaSistrix } from "react-icons/fa";

const HeaderSocial = () => {
    return (
        <div className = {styles.header_links}>
            <div>
                <ul>
                    <li><FaFacebookF /></li>
                    <li><FaTwitter /></li>
                    <li><FaLinkedinIn /></li>
                    <li><FaInstagram /></li>
                    <li><FaFacebookMessenger /></li>
                    <li><FaMobileAlt /></li>
                </ul>               
            </div>
            <div>
                <input type="text" 
                placeholder = "search here"
                />
                <button><FaSistrix color= "black"/></button>
            </div>
        </div>
    )
}

export {HeaderSocial}
