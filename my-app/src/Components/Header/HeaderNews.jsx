import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styles from "../../Styles/Header.module.css"
import { FaNewspaper, FaBars } from "react-icons/fa";
import { useSelector } from 'react-redux';

const HeaderNews = ({handlePop}) =>{
const username = useSelector((state) => state.auth.username) 
const isAuth = useSelector((state) => state.auth.isAuth);
const history=useHistory()

    // Takes on subscribe page when user click on subscribe button
    const handleSubscribe=()=>{
        history.push("/subscribe")
    }

    // Takes on sign in page when user click on sign in button
    const handleSignin=()=>{
        history.push("/signin")
    }

    // Takes on dashboard page when user click on sign in button
    const handleRedirect = () => {
        history.push("/dashboard");
    }

    return (
        <div className = {styles.header_news}>
            <div>
                {/* Opens up popUp navbar */}
                <FaBars onClick = {handlePop}/>
            </div>
            <div>
                <Link to = "" >HOME</Link>
            </div>
            <div className = {styles.news_link}>
                <span>NEWS</span>
                
                <ul>
                <span className = {styles.arrow}></span>
                    <li>NATIONAL</li>
                    <li>INTERNATIONAL</li>
                    <li>STATES</li>
                    <li>CITIES</li>
                </ul>
            </div>
            <div className = {styles.news_link}>
                <span>ELECTIONS</span>
                <ul>
                <span className = {styles.arrow}></span>
                    <li>ASSAM</li>
                    <li>KERALA</li>
                    <li>TAMIL NADU</li>
                    <li>KARANATAKA</li>
                    <li>DELHI</li>
                    <li>CHENNAI</li>
                    <li>PUNJAB</li>
                </ul>
            </div>
            <div className = {styles.news_link}>
                <span>OPINION</span>
                <ul>
                <span className = {styles.arrow}></span>
                    <li>CARTOONS</li>
                    <li>COLUMNS</li>
                    <li>EDITORIAL</li>
                    <li>INTERVIEW</li>
                    <li>READ</li>
                    <li>COMMENT</li>
                    <li>LETTERS</li>
                </ul>
            </div>
            <div className = {styles.news_link}>
                <span>BUSINESS</span>
                <ul>
                <span className = {styles.arrow}></span>
                    <li>INDUSTRY</li>
                    <li>ECONOMY</li>
                    <li>MARKETS</li>
                    <li>BUDGET</li>
                    <li>STOCK QUOTES</li>
                </ul>
            </div>
            <div className = {styles.news_link}>
                <span>SPORTS</span>
                <ul>
                <span className = {styles.arrow}></span>
                    <li>CRICKET</li>
                    <li>FOOTBALL</li>
                    <li>HOCKEY</li>
                    <li>RUGBY</li>
                    <li>RACES</li>
                    <li>ATHLETICS</li>
                    <li>OTHERS</li>
                </ul>
            </div>
            <div className = {styles.news_link}>
                <span>CROSSWORD</span>
            </div>
            <div className = {styles.dash}>
                <div>
                    <div className = {styles.newspaper}>
                        <FaNewspaper onClick={handleRedirect}/>
                    </div>
                </div>
                <div>
                    <button onClick={handleSubscribe} >Subscribe Now</button>
                </div>
                <div>
                   {!isAuth ? <button onClick={handleSignin} >Sign In</button> : <h5>{`Hi ${username}`}</h5>}
                </div>
            </div>
        </div>
    )
}

export {HeaderNews}
