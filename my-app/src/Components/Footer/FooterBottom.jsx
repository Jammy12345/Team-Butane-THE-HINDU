import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles/Footer.module.css";

const FooterBottom = () => {
    return (
        <div className={styles.links}>
            <div className={styles.headLinks}>
                <Link to=" ">HOME</Link>
                <Link to=" ">NEWS</Link>
                <Link to=" ">ELECTIONS</Link>
                <Link to=" ">OPINION</Link>
                <Link to=" ">BUSINESS</Link>
                <Link to=" ">SPORT</Link>
                <Link to=" ">COUPONS</Link>
                <Link to=" ">CROSSWORD</Link>
                <Link to=" ">ENTERTAINMENT</Link>
            </div>
            <div className={styles.the_site}>
                <p>THE SITE</p>
                <Link to=" ">About Us</Link>
                <Link to=" ">Terms of Use</Link>
                <Link to=" ">Privacy Policy</Link>
                <Link to=" ">Contacts</Link>
                <Link to=" ">Archive</Link>
                <Link to=" ">Print Subscription</Link>
                <Link to=" ">ePaper</Link>
                <Link to=" ">Digital Subscription</Link>
                <Link to=" ">RSS Feeds</Link>
                <Link to=" ">Site map</Link>
            </div>
            <div className={styles.the_site}>
                <p>GROUP SITES</p>
                <Link to=" ">The Hindu</Link>
                <Link to=" ">Business Line</Link>
                <Link to=" ">BL on Campus</Link>
                <Link to=" ">Sports Star</Link>
                <Link to=" ">Front Line</Link>
                <Link to=" ">The Hindu Center</Link>
                <Link to=" ">RoofandFloor</Link>
                <Link to=" ">STEP</Link>
                <Link to=" ">Yound World Club</Link>
                <Link to=" ">Publications</Link>
                <Link to=" ">ebooks</Link>
                <Link to=" ">Images</Link>
                <Link to=" ">Classifields</Link>
                <Link to=" ">Print Subscription</Link>
                <Link to=" ">Resources</Link>
                <Link to=" ">Coronavirus</Link>
            </div>
            <div className={styles.the_site}>
                <h6>CONTACT US</h6>
                <span>Copyright© 2021, THG PUBLISHING PVT LTD.</span>
            </div>
        </div>
    );
};

export { FooterBottom };
