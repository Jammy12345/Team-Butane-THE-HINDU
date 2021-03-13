import React from 'react'
import styles from "../../Styles/Header.module.css"
import { FaFacebookF, FaTwitter,FaLinkedinIn, FaInstagram, FaFacebookMessenger, FaMobileAlt, FaSistrix } from "react-icons/fa";
import { useHistory } from 'react-router';

const HeaderSocial = () => {

    const history=useHistory()

    const [searchInput,setsearchInput]=React.useState("")


    const handleSubmit=(e)=>{
        e.preventDefault()
        history.push(`/search/q/${searchInput}`)
    }

    const handleChange=(e)=>{
        setsearchInput(e.target.value)
    }
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
            <form onSubmit={handleSubmit} > 
                <input onChange={handleChange} type="text" 
                placeholder = "search here"
                value={searchInput}
                />
                <button><FaSistrix color= "black"/></button>
            </form>
            </div>
        </div>
    )
}

export {HeaderSocial}
