import React, { useState } from "react";
import styles from "../Styles/Component.module.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Select = ({width, category}) => {
    const [pop, setPop] = useState("none");

    const handleClick = () => {
        if (pop === "none") {
            setPop("block");
        } else {
            setPop("none");
        }
    };
        console.log(width)
    return (
        <div className={styles.news_category} stlye = {{width: width}}>
            <div className={styles.burger}>
                <div className = {styles.burger_flex}>
                    <FaBars onClick={handleClick} />
                    <h5>{category}</h5>
                </div>
                <div
                    className={pop === "block" ? styles.modal : styles.none}
                ></div>
                <div className={styles.select} style={{ display: pop }}>
                    <p>
                        <ImCross onClick={handleClick} />
                    </p>
                    <p>National</p>
                    <p>International</p>
                    <p>Sports</p>
                    <p>Business</p>
                    <p>Entertainment</p>
                    <p>Politics</p>
                </div>
            </div>
            
            <div>
                <Link to="">SEE ALL</Link>
            </div>
        </div>
    );
};

export { Select };
