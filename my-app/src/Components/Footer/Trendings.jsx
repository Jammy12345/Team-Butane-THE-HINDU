import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles/Footer.module.css";

const Trendings = () => {
    return (
        <div className={styles.trendings}>
            <div>
                <p>trending today</p>
                <Link to="">Uttarakhand CM Trivendra Singh Rawat resigns</Link>
                <Link to="">
                    News Analysis | Biden-Blinken’s new roadmap for Afghanist
                </Link>
                <Link to="">Cartoonscape — March 9, 2021</Link>
                <Link to="">
                    Singer Armaan Malik tries to explain why ‘Butta Bomma’ went
                </Link>
                <Link to="">
                    Oprah interview | Meghan says British royals worried about..
                </Link>
                <Link to="">
                    China gives green light for first downstream dams on Brahm..
                </Link>
                <Link to="">Cartoonscape — March 8, 2021</Link>
                <Link to="">
                    Misplaced concern: On Supreme Court and OTT regulation
                </Link>
                <Link to="">IAS in the corner office</Link>
                <Link to="">
                    Paris-New Delhi Air France flight makes emergency landing
                    i...
                </Link>
            </div>
            <div>
                <p>Trending Topic</p>
                <Link to="">Coronavirus</Link>
                <Link to="">The Hindu MetroPlus</Link>
                <Link to="">Tamil Nadu Assembly Elections 2021</Link>
                <Link to="">West Bengal Assembly Elections 2021</Link>
            </div>
            <div>
                <p>trinding on our group sites</p>
                <div className = {styles.flex}>
                    <div>
                        <p style = {{color: "#5297cd"}}>business line</p>
                        <Link to="">Coronavirus</Link>
                        <Link to="">LIC Of India</Link>
                        <Link to="">Stocks And Shares</Link>
                        <Link to="">Initial Public Offering</Link>
                        <Link to="">Mutual Funds</Link>
                    </div>
                    <div>
                        <p style = {{color: "#de5663"}}>sports start</p>
                        <Link to="">Vijay Hazare Trophy</Link>
                        <Link to="">Maithali Raj</Link>
                        <Link to="">Indian Super League</Link>
                        <Link to="">Vijay Hazare Trophy</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Trendings };
