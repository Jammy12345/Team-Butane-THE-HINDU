import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles/Header.module.css";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Modal = ({ handlePop, display }) => {
    return (
        <div className={styles.modal} style={{ display: display }}>
            <div className={styles.cross}>
                <ImCross onClick={handlePop} />
                <p onClick={handlePop}>CLOSE THIS MENU</p>
            </div>
            <div className={styles.main_link}>
                <Link to="">TRENDING TODAY</Link>
                <Link to="">CHENNAI</Link>
                <Link to="">HYDERABAD</Link>
                <Link to="">BENGAURU</Link>
                <Link to="">VIDEOS</Link>
                <Link to="">ENTERTAINMENT</Link>
            </div>
            <div className={styles.allLinks}>
                <div>
                    <Link to="">Subscripton</Link>
                    <span>----------------------------------------------</span>
                    <Link to="">Latest News</Link>
                    <span>----------------------------------------------</span>
                    <Link to="">Today's Paper</Link>
                    <span>----------------------------------------------</span>
                    <Link to="">ePaper</Link>
                    <span>----------------------------------------------</span>
                    <Link to="">Housing</Link>
                    <span>----------------------------------------------</span>
                    <Link to="">Coupons</Link>
                    <span>----------------------------------------------</span>
                </div>
                <div>
                    <Link to="">Crossword</Link>
                    <span>----------------------------------------------</span>
                    <br />
                    <Link to="">Cities</Link>
                    <p>bengaluru</p>
                    <p>chennai</p>
                    <p>hyderabad</p>
                    <p>kochi</p>
                    <p>kolkata</p>
                    <p>mumbai</p>
                    <p>madurai</p>
                    <p>mangalore</p>
                    <p>vijayawada</p>
                    <p>vishakapatnam</p>
                    <span>----------------------------------------------</span>
                    <Link to="">Elections</Link>
                    <p>bihar</p>
                    <span>----------------------------------------------</span>
                </div>
                <div>
                    <Link to="">Opinion</Link>
                    <p>editorial</p>
                    <p>lead</p>
                    <p>comments</p>
                    <p>columns</p>
                    <p>cartoons</p>
                    <p>interview</p>
                    <p>open page</p>
                    <p>letters</p>
                    <span>----------------------------------------------</span>
                    <Link to="">Sport</Link>
                    <p>athletics</p>
                    <p>cricket</p>
                    <p>football</p>
                    <p>hockey</p>
                    <p>motorsports</p>
                    <p>other sports</p>
                    <p>races</p>
                    <p>tennis</p>
                    <span>----------------------------------------------</span>
                </div>
                <div>
                    <Link to="">Entertainment</Link>
                    <p>art</p>
                    <p>dance</p>
                    <p>movies</p>
                    <p>reviews</p>
                    <p>music</p>
                    <p>theatre</p>
                    <span>----------------------------------------------</span>
                    <Link to="">Society</Link>
                    <p>faith</p>
                    <p>history</p>
                    <p>culture</p>
                    <span>----------------------------------------------</span>
                    <Link to="">Books</Link>
                    <p>reviews</p>
                    <p>authors</p>
                    <span>----------------------------------------------</span>
                    <Link to="">Children</Link>
                    <span>----------------------------------------------</span>
                </div>
                <div>
                    <Link to="">Life & Style</Link>
                    <p>fashion</p>
                    <p>fitness</p>
                    <p>food</p>
                    <p>motoring</p>
                    <p>travel</p>
                    <p>homes</p>
                    <p>gerden</p>
                    <p>luxury</p>
                    <span>----------------------------------------------</span>
                    <Link to="">Technology</Link>
                    <p>gadgets</p>
                    <p>internet</p>
                    <span>----------------------------------------------</span>
                    <Link to="">Sci-Tech</Link>
                    <p>science</p>
                    <p>technology</p>
                    <p>health</p>
                    <p>agriculture</p>
                    <p>environmnt</p>
                    <span>----------------------------------------------</span>
                </div>
                <div>
                    <Link to="">Education</Link>
                    <p>career</p>
                    <p>college</p>
                    <p>school</p>
                    <span>----------------------------------------------</span>
                    <Link to="">Multimedia</Link>
                    <p>photos</p>
                    <p>videos</p>
                    <p>podcast</p>
                    <span>----------------------------------------------</span>
                    <Link to="">Data</Link>
                    <span>----------------------------------------------</span>
                    <Link to="">Special</Link>
                    <span>----------------------------------------------</span>
                    <Link to="">Resources</Link>
                    <span>----------------------------------------------</span>
                    <Link to="">Tags</Link>
                    <span>----------------------------------------------</span>
                    <Link to="">theRead</Link>
                    <span>----------------------------------------------</span>
                    <Link to="">Thratre-Fest</Link>
                    <span>----------------------------------------------</span>
                    <Link to="">November-Fest</Link>
                    <span>----------------------------------------------</span>
                    <Link to="">Lit for life</Link>
                    <span>----------------------------------------------</span>
                    <Link to="">Tamil Nadu</Link>
                    <span>----------------------------------------------</span>
                    <Link to="">Smiling</Link>
                    <span>----------------------------------------------</span>
                    <Link to="">Newsletter</Link>
                    <span>----------------------------------------------</span>
                </div>
            </div>
            <div className={styles.bottom_link}>
                <div>
                    <Link to="">ARCHIVES</Link>
                    <Link to="">CLASSIFIELDS</Link>
                    <Link to="">EBOOKS</Link>
                    <Link to="">SUBSCRIBE</Link>
                    <Link to="">SOCIAL</Link>
                    <Link to="">ABOUT US</Link>
                </div>
                <div>
                    <ul>
                        <Link to="">CONNECT WITH US</Link>
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
                    </ul>
                </div>
            </div>
        </div>
    );
};

export { Modal };
